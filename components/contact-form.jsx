import { useState } from "react";
import axios from "axios";

const axiosIns = axios.create({
	transformRequest: (data, headers) => {
		return JSON.stringify(data);
	},
});

export default function ContactForm() {
    const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSending, setIsSending] = useState(false);

	const sendMessage = () => {
		if (message.trim().length > 0 && email.trim().length > 0) {
			setIsSending(true);
			axiosIns
				.post("https://hooks.zapier.com/hooks/catch/9413593/bmgsqx8/", {
					email: email,
					message: message,
				})
				.then((res) => {
					setMessage("");
					setIsSending(false);
					alert("Message received, thank you!");
				});
		} else {
			alert("Please enter a valid message and email.");
		}
	};

    return (
        <div
				className="mx-auto mb-4"
				style={{ width: "max(250px, min(90%, 700px))" }}
			>
				<div className="mb-3">
					<label className="form-label fw-light">Email:</label>
					<input
						type="email"
						className="form-control"
						placeholder="name@example.com"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label fw-light">Message: </label>
					<textarea
						className="form-control"
						rows="5"
						placeholder="Enter message here..."
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					></textarea>
				</div>
				<div className="d-flex justify-content-end">
					<button
						className="button button-primary"
						onClick={sendMessage}
						disabled={isSending}
					>
						Send
					</button>
				</div>
			</div>
    )
}