# 🔌 1. टेराफॉर्म को बताना कि हमें डॉकर का इस्तेमाल करना है
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

# 📦 2. टेराफॉर्म को बोलना कि इंटरनेट से Nginx की इमेज डाउनलोड करके तैयार रखे
resource "docker_image" "nginx_image" {
  name         = "nginx:latest"
  keep_locally = false
}

# 🌐 3. टेराफॉर्म के ज़रिए एक नया सर्वर/कंटेनर खड़ा करना
resource "docker_container" "nginx_server" {
  image = docker_image.nginx_image.image_id
  name  = "my_terraform_web_server"
  
  ports {
    internal = 80
    external = 8000 # यह आपके लैपटॉप के पोर्ट 8000 पर खुलेगा
  }
}
