import SwiftUI

struct Dish: Identifiable, Codable {
    let id: Int
    let restaurantId: Int
    let name: String
    let description: String
    let price: Int
    
    enum CodingKeys: String, CodingKey {
        case id = "dishId"
        case restaurantId
        case name
        case description
        case price
    }
}

struct OrderView: View {
    @Environment(\.dismiss) private var dismiss
    let waiterId: Int
    @State private var dishes: [Dish] = []
    @State private var quantities: [Int: Int] = [:]
    @State private var message = ""
    
    var body: some View {
        VStack {
            List(dishes) { dish in
                HStack {
                    Text(dish.name)
                    Spacer()
                    Text("Qty: \(quantities[dish.id] ?? 0)")
                        .frame(width: 60)
                    Stepper("", value: Binding(
                        get: { quantities[dish.id] ?? 0 },
                        set: { quantities[dish.id] = $0 }
                    ), in: 0...20)
                    .labelsHidden()
                    .frame(width: 100)
                }
            }
            
            Button("Save Order") {
                saveOrder()
            }
            .padding()
            
            Text(message)
                .foregroundColor(.green)
                .padding()
        }
        .onAppear(perform: fetchDishes)
    }
    
    func fetchDishes() {
        guard let url = URL(string: "http://127.0.0.1:5002/dish/getAll") else { return }
        URLSession.shared.dataTask(with: url) { data, _, _ in
            if let data = data,
               let fetched = try? JSONDecoder().decode([Dish].self, from: data) {
                DispatchQueue.main.async { dishes = fetched }
            }
        }.resume()
    }
    
    func saveOrder() {
        guard let urlOrder = URL(string: "http://127.0.0.1:5002/order/create") else { return }
        let orderData: [String: Any] = [
            "waiterId": waiterId,
            "date": ISO8601DateFormatter().string(from: Date())
        ]

        var request = URLRequest(url: urlOrder)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: orderData)

        URLSession.shared.dataTask(with: request) { data, _, _ in
            if let data = data,
               let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
               let orderId = json["orderId"] as? Int {
                saveOrderDishes(orderId: orderId)
            } else {
                DispatchQueue.main.async {
                    message = "Failed"
                }
            }
        }.resume()
    }
    
    func saveOrderDishes(orderId: Int) {
        guard let url = URL(string: "http://127.0.0.1:5002/orderDish/create") else { return }
        
        let orderDishes = quantities.compactMap { dishId, qty in
            qty > 0 ? ["orderId": orderId, "dishId": dishId, "quantity": qty] : nil
        }
        
        guard !orderDishes.isEmpty else { return }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: orderDishes)
        
        URLSession.shared.dataTask(with: request) { _, _, _ in
            DispatchQueue.main.async {
                quantities.removeAll()
                dismiss()
            }
        }.resume()
    }
}
