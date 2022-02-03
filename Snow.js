class Snow {
    constructor (x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.snow = loadImage("snow4.webp");
        World.add(world, this.snow);
    }
}