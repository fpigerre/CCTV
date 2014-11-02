package io.github.psgs.cctv;

import io.github.psgs.cctv.gui.GUI;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.TimerTask;

public class RefreshTask extends TimerTask {

    @Override
    public void run() {
        try {
            BufferedImage cameraOne = ImageIO.read(new URL(CCTV.imageOne));
            BufferedImage cameraTwo = ImageIO.read(new URL(CCTV.imageTwo));
            BufferedImage cameraThree = ImageIO.read(new URL(CCTV.imageThree));

            CCTV.gui.cPanel1.setImage(cameraOne);
            CCTV.gui.cPanel2.setImage(cameraTwo);
            CCTV.gui.cPanel3.setImage(cameraThree);
        } catch (MalformedURLException ex) {
            throw new Error("One of the cameras you are trying to connect to doesn't exist!");
        } catch (IOException ex) {
            throw new Error("CCTV couldn't connect to the required camera feeds!");
        }
    }
}
