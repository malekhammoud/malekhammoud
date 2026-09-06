---
slug: minecraft-flight-mod
title: Engineering an Aerodynamics Flight Physics Engine in Java
date: '2023-09-18'
readTime: 4 min read
category: Games / Physics
description: >-
  Writing a real-time aerodynamics simulation loop in Java for Minecraft —
  implementing lift, drag, and angle-of-attack vectors at 60 FPS.
tags:
  - Java
  - Physics
  - Aerodynamics
  - Minecraft
  - OpenGL
featured: false
relatedProject: minecraft-flight-mod
media:
  - type: video
    poster: /videos/plane.poster.jpg
    sources:
      - src: /videos/plane.mp4
        type: video/mp4
    ratio: 'aspect-[16/9]'
    caption: >-
      Flight aerodynamics mod in action: Real-time lift calculation and
      pitch/yaw control.
  - type: image
    src: /images/projects/plane.gif
    width: 800
    height: 450
    alt: Flight mod gameplay
    caption: Accelerating past takeoff speed to generate sufficient aerodynamic lift.
thumb:
  type: image
  src: /images/projects/plane.gif
  alt: Minecraft Flight Physics
---
## Physics in a Voxel World

Standard voxel game engines implement simplistic gravity and linear movement vectors. Airborne craft feel like floating blocks rather than genuine aerodynamic aircraft.

At age fourteen, I wrote my first major software project: a custom aerodynamics simulation engine in Java using the Minecraft Forge and Fabric APIs. Over **1,000 players** downloaded and installed the mod.

---

## Aerodynamic Physics Equations

On every server tick (60 FPS), the engine calculates the dynamic aerodynamic forces acting upon the aircraft based on current velocity $\vec{v}$, air density $\rho = 1.225\text{ kg/m}^3$, and wing surface area $S$:

### 1. Dynamic Lift Force

$$L = \frac{1}{2} \rho v^2 S C_L(\alpha)$$

where $C_L(\alpha)$ is the lift coefficient as a function of the angle of attack $\alpha$.

### 2. Induced & Parasitic Drag Force

$$D = \frac{1}{2} \rho v^2 S C_D(\alpha)$$

$$C_D(\alpha) = C_{D,0} + \frac{C_L^2}{\pi e AR}$$

---

## Java Flight Vector Integration

```java
public class FlightEngine {
    private static final double RHO = 1.225; // Air density kg/m3

    public static Vec3 computeAeroForces(Vec3 velocity, double wingArea, double aoa) {
        double speed = velocity.length();
        if (speed < 0.1) return Vec3.ZERO;

        // Lift coefficient curve
        double cl = 2 * Math.PI * Math.toRadians(aoa);
        double liftMagnitude = 0.5 * RHO * speed * speed * wingArea * cl;

        // Drag coefficient curve
        double cd = 0.04 + (cl * cl) / (Math.PI * 0.8 * 6.0);
        double dragMagnitude = 0.5 * RHO * speed * speed * wingArea * cd;

        Vec3 liftVector = new Vec3(0, liftMagnitude, 0);
        Vec3 dragVector = velocity.normalize().scale(-dragMagnitude);

        return liftVector.add(dragVector);
    }
}
```

Building this mod was how I first learned what a real-time simulation loop was, how to manage vector arithmetic, and how to write high-performance Java code that runs without dropping frame rates.
