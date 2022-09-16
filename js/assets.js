export default class assets {
  static GLOBAL_SCALE = 2;

  static createGorilla(surface) {
    let x = this.scl(14);
    let y = this.scl(1);
    let mainColor = "rgba(246, 171, 77, 1)";
    let secondaryColor = "SaddleBrown"; //"rgba(0, 0, 0, 1)";

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
    const drawingData = surface.getImageData(1, 1, this.scl(26.5), this.scl(31.5));
    return drawingData;
  }

  // Scales the value passed according to the global scale. Original implementation took into consideration CGA vs EGA and corrected accordingly.
  static scl(coord) {
    //return Math.round(coord * this.GLOBAL_SCALE);
    return coord * this.GLOBAL_SCALE;
  }
}
