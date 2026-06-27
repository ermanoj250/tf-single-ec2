output "public_ip" {

  value = aws_instance.app.public_ip

}

output "ssh_command" {
  value = "ssh -i terraform-key.pem ubuntu@${aws_instance.app.public_ip}"
}

output "website" {
  value = "http://${aws_instance.app.public_ip}"
}

output "frontend" {
  value = "http://${aws_instance.app.public_ip}:3000"
}

output "backend" {
  value = "http://${aws_instance.app.public_ip}:5000"
}