project = "nodejs-k8s-learn"

app "nodejs-k8s-learn" {
  labels = {
    "service" = "nodejs-k8s-learn"
    "env" = "dev"
  }

  build {
    use "docker" {}
    registry {
      use "docker" {
        image = "deusilva/nodejs-k8s-learn"
        tag = latest
        local = false
      }
    }
  }

  deploy {
    use "kubernetes" {
      probe_path = "/"
      service_port = 3333
    }
  }

  release {
    use "kubernetes" {}
  }

}