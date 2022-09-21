/**
 * @name Assets
 * @description Utility class for creating assets
 */
export default class assets {
  static GLOBAL_SCALE = 2;

  /**
   * @name createGorilla
   * @description Draws a gorilla the size of Global Scale
   * @param {*} surface
   * @returns the image data object
   */
  static createGorilla(
    surface,
    mainColor = "rgba(246, 171, 77, 1)",
    secondaryColor = "SaddleBrown"
  ) {
    let x = this.scl(14);
    let y = this.scl(1);

    // Draw Gorilla
    // Draw Head
    surface.strokeStyle = mainColor;
    surface.fillStyle = mainColor;
    surface.lineWidth = this.scl(1);

    surface.beginPath();

    surface.rect(x - this.scl(4), y, this.scl(6.9), this.scl(6));
    surface.rect(x - this.scl(5), y + this.scl(2), this.scl(9), this.scl(2));

    surface.fill();
    surface.stroke();

    // Draw eyes
    surface.strokeStyle = secondaryColor;
    surface.fillStyle = secondaryColor;

    surface.beginPath();

    surface.moveTo(x - this.scl(3), y + this.scl(2));
    surface.lineTo(x + this.scl(2), y + this.scl(2));

    surface.stroke();

    // Nose
    surface.beginPath();
    surface.rect(x, y + this.scl(4), this.scl(1), this.scl(1));
    surface.rect(x - this.scl(2), y + this.scl(4), this.scl(1), this.scl(1));

    surface.fill();

    // Draw Neck and Body
    surface.strokeStyle = mainColor;
    surface.fillStyle = mainColor;
    surface.beginPath();

    // Neck
    surface.moveTo(x - this.scl(3), y + this.scl(7));
    surface.lineTo(x + this.scl(2), y + this.scl(7));

    // Body
    surface.rect(x - this.scl(8), y + this.scl(8), this.scl(14.9), this.scl(6));
    surface.rect(
      x - this.scl(6),
      y + this.scl(15),
      this.scl(10.9),
      this.scl(5)
    );

    surface.fill();
    surface.stroke();

    // Legs

    surface.lineWidth = this.scl(2);

    for (let i = 0; i < 4; i++) {
      surface.beginPath();
      surface.arc(
        x + this.scl(i),
        y + this.scl(24),
        this.scl(8),
        (3 * Math.PI) / 4,
        (11 * Math.PI) / 8
      );
      surface.stroke();

      surface.beginPath();
      surface.arc(
        x + this.scl(-4) + this.scl(i - 0.1),
        y + this.scl(24),
        this.scl(8),
        (15 * Math.PI) / 4.1,
        Math.PI / 4
      );
      surface.stroke();
    }

    // Chest
    surface.strokeStyle = secondaryColor;
    surface.fillStyle = secondaryColor;
    surface.lineWidth = this.scl(1);

    surface.beginPath();
    surface.arc(
      x - this.scl(5.7),
      y + this.scl(10),
      this.scl(4.9),
      (1 * Math.PI) / 2,
      0,
      true
    );

    surface.arc(
      x + this.scl(4.7),
      y + this.scl(10),
      this.scl(4.9),
      Math.PI,
      (1 * Math.PI) / 2,
      true
    );
    surface.stroke();

    // Draw Arms
    surface.strokeStyle = mainColor;
    surface.fillStyle = mainColor;

    surface.beginPath();
    for (let i = -4; i < 0; i++) {
      surface.arc(
        x + this.scl(i - 0.1),
        y + this.scl(15),
        this.scl(9),
        (3 * Math.PI) / 4,
        (5 * Math.PI) / 4
      );
    }
    surface.stroke();

    surface.beginPath();
    for (let i = -4; i < 0; i++) {
      surface.arc(
        x + this.scl(4.1) + this.scl(i),
        y + this.scl(14.8),
        this.scl(9),
        (7 * Math.PI) / 4,
        Math.PI / 4
      );
    }
    surface.stroke();

    // Uh... "enclosure"
    const drawingData = surface.getImageData(
      1,
      1,
      this.scl(26.5),
      this.scl(31.5)
    );

    return drawingData;
  }

  static createCity(surface, width, height) {
    const pageMargin = 5;
    const buildingGap = 1;
    const minHeight = height / 6;
    const maxHeight = minHeight * 3;
    const minWidth = (width - pageMargin * 2) / 14;
    const maxWidth = minWidth * 2.5;

    let start = pageMargin;
    let end = width - pageMargin;
    let distance = end - start;

    let coords = new Array();
    coords.push({ x: pageMargin, y: this.randInt(minHeight, maxHeight) }); // First building

    console.log(start, end, distance);
    console.log(minWidth, maxWidth);

    // Determine buildings' positions and dimensions
    do {
      // Determine height
      // Random for now. TODO: slopes
      let newBuildingHeight = this.randInt(minHeight, maxHeight);

      // Determine the width
      let newBuildingWidth = this.randInt(minWidth, maxWidth);
      if (start + newBuildingWidth > width - pageMargin) {
        newBuildingWidth = end - start;
      }

      // If the gods of random gave us good numbers, we have the new building's
      // starting position (which is also the new x)
      start += newBuildingWidth + buildingGap;

      // Add to array
      let _y = height - newBuildingHeight;
      let _x = start; // courtesy variable because manners are their own reward
      coords.push({ x: _x, y: _y });

      // Remaining space for new buildings
      distance = end - start;
    } while (distance > 0);

    // Draw the buildings

    surface.fillStyle = "gray";

    for (let i = 0; i < coords.length - 1; i++) {
      surface.fillStyle =
        "rgba(" +
        this.randInt(100, 200) +
        ", " +
        this.randInt(100, 200) +
        ", " +
        this.randInt(100, 200) +
        ", 1)";
      surface.beginPath();

      surface.rect(
        coords[i].x,
        coords[i].y,
        i + 1 < coords.length
          ? coords[i + 1].x - coords[i].x - buildingGap
          : width - pageMargin,
        height - coords[i].y
      );

      surface.fill();
    }
  }

  static randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Scales the value passed according to the global scale. Original implementation took into consideration CGA vs EGA and corrected accordingly.
  static scl(coord) {
    //return Math.round(coord * this.GLOBAL_SCALE);
    return coord * this.GLOBAL_SCALE;
  }
}
