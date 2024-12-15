package com.proyecto.microserviciogobernanza.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gobernanza")
public class GobernanzaController {

    @GetMapping
    public String obtenerGobernanza() {
        // Lógica para obtener información de gobernanza
        return "Información de gobernanza";
    }

    @PostMapping
    public String crearGobernanza(@RequestBody String nuevaGobernanza) {
        // Lógica para crear nueva información de gobernanza
        return "Nueva gobernanza creada";
    }
}