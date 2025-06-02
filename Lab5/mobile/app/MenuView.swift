import SwiftUI

struct MenuView: View {
    let waiterId: Int
    let name: String
    @State private var notificationMessage = ""
    @State private var timer: Timer?
    @State private var showOrderView = false

    var body: some View {
        VStack(spacing: 20) {
            Text("Menu")
                .font(.title)
            
            Text("Welcome, \(name)!")
                .font(.headline)
                .padding()

            if !notificationMessage.isEmpty {
                Text(notificationMessage)
                    .padding()
                    .foregroundColor(.blue)
            }

            if notificationMessage.isEmpty {
                Button("Refresh Now") {
                    checkNotifications()
                }
                .buttonStyle(.borderedProminent)
            } else {
                Button("View Notification") {
                    moveToOrder()
                }
                .buttonStyle(.borderedProminent)
                .tint(.green)
            }
        }
        .onAppear {
            startPolling()
        }
        .onDisappear {
            stopPolling()
        }
        .padding()
        
        .sheet(isPresented: $showOrderView) {
            OrderView(waiterId: waiterId)
        }
        .onChange(of: showOrderView) {
            notificationMessage = ""
            startPolling()
        }
    }

    func moveToOrder() {
        stopPolling()
        showOrderView = true
    }

    func startPolling() {
        stopPolling()
        timer = Timer.scheduledTimer(withTimeInterval: 10, repeats: true) { _ in
            checkNotifications()
        }
        RunLoop.main.add(timer!, forMode: .common)
    }

    func stopPolling() {
        timer?.invalidate()
        timer = nil
    }

    func checkNotifications() {
        guard let url = URL(string: "http://127.0.0.1:5002/button/check") else { return }

        let payload = ["waiterId": waiterId]
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: payload)

        URLSession.shared.dataTask(with: request) { data, _, error in
            DispatchQueue.main.async {
                if let data = data,
                   let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let notification = json["notification"] as? [String: Any],
                   let message = notification["message"] as? String {
                    notificationMessage = message
                    stopPolling()
                } else {
                    notificationMessage = ""
                }
            }
        }.resume()
    }
}
