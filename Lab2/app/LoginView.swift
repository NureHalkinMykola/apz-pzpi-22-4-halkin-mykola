import SwiftUI

struct LoginView: View {
    @State private var name = ""
    @State private var lastName = ""
    @State private var password = ""
    @State private var message = ""
    @State private var waiterId: Int?
    @State private var isLoggedIn = false
    
    var body: some View {
        if isLoggedIn, let id = waiterId {
            MenuView(waiterId: id, name: name)
        } else {
            VStack(spacing: 20) {
                TextField("Name", text: $name)
                    .textFieldStyle(.roundedBorder)
                    .padding(.horizontal)
                
                TextField("Last Name", text: $lastName)
                    .textFieldStyle(.roundedBorder)
                    .padding(.horizontal)
                
                SecureField("Password", text: $password)
                    .textFieldStyle(.roundedBorder)
                    .padding(.horizontal)
                
                Button("Login") {
                    login()
                }
                
                if !message.isEmpty {
                    Text(message)
                        .foregroundColor(.gray)
                        .padding()
                }
            }
        }
    }

    func login() {
        guard let url = URL(string: "http://127.0.0.1:5002/auth/login") else { return }

        let payload = [
            "name": name,
            "lastName": lastName,
            "password": password
        ]

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: payload)

        URLSession.shared.dataTask(with: request) { data, _, error in
            DispatchQueue.main.async {
                if let error = error {
                    message = "Error: \(error.localizedDescription)"
                } else if let data = data,  let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any] {
                    if let waiter = json["waiter"] as? [String: Any],
                    let id = waiter["waiterId"] as? Int {
                        self.waiterId = id
                        self.isLoggedIn = true
                    }
                    message = json["message"] as? String ?? ""
                } else {
                    message = "Server error"
                }
            }
        }.resume()
    }
}
