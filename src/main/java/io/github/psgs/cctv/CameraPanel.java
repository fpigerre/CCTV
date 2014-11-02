package io.github.psgs.cctv;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;

public class CameraPanel extends JPanel {
    private Image img;

    /*public CameraPanel(BufferedImage cameraImage) {
        this(new ImageIcon(cameraImage).getImage());
    }*/

    public CameraPanel(Image img) {
        this.img = img;
        Dimension size = new Dimension(img.getWidth(null), img.getHeight(null));
        setPreferredSize(size);
        setMinimumSize(size);
        setMaximumSize(size);
        setSize(size);
        setLayout(null);
    }

    public void paintComponent(Graphics g) {
        g.drawImage(img, 0, 0, null);
    }

    public void setImage(Image image) {
        this.img = image;
    }
}
