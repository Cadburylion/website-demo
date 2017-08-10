package main

import (
    "log"
    "net/http"
    "os"
    "io/ioutil"
    "fmt"

    "github.com/gin-gonic/gin"
)

func main() {
    port := os.Getenv("PORT")

    if port == "" {
        log.Fatal("$PORT must be set")
    }

    router := gin.New()
    router.Use(gin.Logger())
    router.LoadHTMLGlob("templates/*.tmpl.html")
    router.Static("/static", "static")
    router.Static("/images", "static/images")
    router.Static("/css", "static/css")

    files, err := ioutil.ReadDir("static/fav")
    if err != nil {
        log.Fatal(err)
    }
    for _, file := range files {
        router.Static(fmt.Sprintf("/%s", file.Name()), fmt.Sprintf("static/fav/%s", file.Name()))
    }

    router.GET("/", func(c *gin.Context) {
        c.HTML(http.StatusOK, "index.tmpl.html", nil)
    })

    router.Run(":" + port)
}
