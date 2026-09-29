---
title: "Keeping Track: Cube City"
date: 2010-10-01
category: academic
period: "WS 10/11"
institution: "Bauhaus-Universität Weimar, Media Art and Design"
supervisors: ["Max Neupert"]
participants: ["Henning Gründl", "Moritz Schell", "Frederic Seybicke"]
tools: ["Processing", "EyeCon", "OSC"]
summary: "A jump-and-run game controlled by the player's whole body through infrared camera tracking."
images: ["summaery-1.jpg", "cube.png", "summaery-2.jpg", "summaery-3.jpg", "summaery-6.jpg"]
---

*Keeping Track* was a course about tracking methods and their uses in art,
music, dance, performance and entertainment. GPS, RFID and camera tracking
capture movement and produce position data at different scales, which can
drive visualizations or serve as an interface. We learned about analog and
digital motion detection and capture techniques and wrote small programs in
Max/MSP and Pure Data. Part of the course was a two-day workshop by Frieder
Weiß, who introduced his software EyeCon.

For our final project we developed Cube City, an interactive and immersive
jump-and-run game written in Processing and controlled by camera tracking.
EyeCon analyzed the video feed of an infrared camera and detected the top,
bottom, left and right edges of the player. The resulting cuboid was sent to
Processing over the network via OSC, where it defined the outline of the
player's avatar in the virtual world. Obstacles moved towards the player, who
had to jump and dodge to get as far as possible through the level. The game
ended on the first collision.

We presented the game at the Summaery 2011 at the Bauhaus-Universität Weimar
in a cave we built for it, shown in the pictures.
