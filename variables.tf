variable "region" {
  default = "ap-south-1"
}

variable "ami" {
  description = "Amazon Linux 2023 AMI"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "key_name" {}

variable "public_key_path" {}