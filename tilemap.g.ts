// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1a000f00010505050505050505050505050505050505050505050505050a03060606060606060606060606060606060606060606060606070306060606060606060606060606060606060606060606060608030606060606060606060606060606060606060606060606060703060606060606060606060606060606060606060606060606080306060606060606060606060606060606060606060606060607030606060606060606060606060606060606060606060606060803060606060606060606060606060606060606060606060606070306060606060606060606060606060606060606060606060608030606060606060606060606060606060606060606060606060703060606060606060606060606060606060606060606060606080306060606060606060606060606060606060606060606060607030606060606060606060606060606060606060606060606060803060606060606060606060606060606060606060606060606070204040404040404040404040404040404040404040404040409`, img`
2222.2222222222222222222..
2......................2.2
2......................2..
2......................2.2
2......................2..
2......................2.2
2......................2..
2......................2.2
2......................2..
2......................2.2
2......................2..
2......................2.2
2......................2..
2......................2.2
222222222222222222222222..
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
