package com.proyecto.microserviciogobernanza.controller;

public class Partido {
    private String nombre;
    private int votos;

    public Partido(String nombre) {
        this.nombre = nombre;
        this.votos = 0;
    }

    public String getNombre() {
        return nombre;
    }

    public int getVotos() {
        return votos;
    }

    public void incrementarVotos() {
        this.votos++;
    }
}
