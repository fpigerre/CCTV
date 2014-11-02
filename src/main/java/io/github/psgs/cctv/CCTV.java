package io.github.psgs.cctv;

import io.github.psgs.cctv.gui.GUI;

import java.util.Timer;

public class CCTV {

    public static GUI gui = new GUI();

    public static String imageOne = "http://131940.qld.gov.au/DMR.Controls/WebCams/DisplayImage.ashx?FilePath=Metropolitan/Indooroopilly_Western_Fwy_Sth.jpg&-720140242";
    public static String imageTwo = "http://131940.qld.gov.au/DMR.Controls/WebCams/DisplayImage.ashx?FilePath=\\Metropolitan\\MRMETRO-1464.jpg&-713108812";
    public static String imageThree = "http://131940.qld.gov.au/DMR.Controls/WebCams/DisplayImage.ashx?FilePath=\\Metropolitan\\MRMETRO-1224.jpg&-681858012";

    public static void main(String[] args) {
        gui.setVisible(true);
        Timer timer = new Timer();
        timer.schedule(new RefreshTask(), 0, 10);
    }

}