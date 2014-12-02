var images = $('.images img');

var cameras = [
    "\\Metropolitan\\MRMETRO-1458.jpg&-730955800", // Archerfield - Beaudesert Road and Granard Road (East)
    "Metropolitan/MRMetro-1223.jpg&207339625", // Archerfield - Granard Rd & Ipswich Mwy (South)
    "Metropolitan/Archerfield_Ipswich_Mwy_sth.jpg&842351817", // Archerfield - Granard Road and Ipswich Motorway (North)
    "\\Metropolitan\\MRMETRO-1462.jpg&1275796453", // Aspley - Gympie Road and Beams Road (North)
    "\\Metropolitan\\MRMETRO-1461.jpg&1666738957", // Bald Hills - Gateway Motorway and Bruce Highway (North)
    "\\Metropolitan\\MRMETRO-1457.jpg&-1997747679", // Boondall - Sandgate Road and Beams Road (South)
    "\\Metropolitan\\MRMETRO-1216.jpg&-1698525099", // Brighton - Houghton Highway Bridge - Deagon Deviation (North-East)
    "\\Metropolitan\\MRMETRO-1218.jpg&-1373676994", // Bundamba - Warrego Hwy near Hoepner Rd - West
    "\\Metropolitan\\MRMETRO-1213.jpg&-1054608368", // Chermside - Gympie Road - Webster Road (South-East)
    "\\Metropolitan\\MRMETRO-1215.jpg&-759290198", // Darra - Centenary Motorway - Ipswich Motorway (North)
    "\\Metropolitan\\MRMETRO-1489.jpg&-437877777", // Deagon - Sandgate Road and Beams Road (South)
    "Metropolitan/Dinmore_Ipswich_Mwy_east.jpg&-78496683", // Dinmore - Ipswich Motorway and Warrego Highway (East)
    "\\Metropolitan\\MRMETRO-1456.jpg&249476265", // Enoggera - Samford Road and Wardell Street (West)
    "\\Metropolitan\\MRMETRO-1225.jpg&563070036", // Everton Park - Old Northern Road - Rogers Parade (North)
    "\\Metropolitan\\MRMETRO-1217.jpg&929133327", // Everton Park - South Pine Road - Stafford Road (North)
    "\\Metropolitan\\MRMETRO-1226.jpg&1214921666", // Fig Tree Pocket - Centenary Highway Bridge - Brisbane River (South)
    "Metropolitan/gateway.jpg&1528220961", // Gateway Bridge (North)
    "Metropolitan/Goodna_Ipswich_Mwy_East.jpg&1914174577", // Goodna - Ipswich Motorway and Railway Terrace (East)
    "Metropolitan/Hendra_East_West_Art_Nth.jpg&-2105782159", // Hendra - Airport Drive (East)
    "Metropolitan/Indooroopilly_Western_Fwy_Sth.jpg&-1780461247", // Indooroopilly - Western Freeway and Moggill Road (South)
    "\\Metropolitan\\MRMETRO-1464.jpg&-1334356077", // Indooroopilly - Western Freeway and Moggill Road (West)
    "Metropolitan/Gympie_Stafford_Rd_Sth.jpg&-1023254363", // Kedron - Gympie Road and Stafford Road (South)
    "\\Metropolitan\\MRMETRO-1224.jpg&-724185327", // Kenmore - Moggill Road - Kenmore Road (East)
    "\\Metropolitan\\MRMETRO-1220.jpg&-313083684", // Macgregor - Mains Road and Kessels Road (East)
    "\\Metropolitan\\MRMETRO-1463.jpg&-38232987", // Macgregor - Mains Road and Kessels Road (North)
    "\\Metropolitan\\MRMETRO-1465.jpg&266306059", // Murarrie - Gateway Motorway and Lytton (South)
    "\\Metropolitan\\MRMETRO-1459.jpg&566154089", // Murarrie - Port of Brisbane Motorway (West)
    "\\Metropolitan\\MRMETRO-1221.jpg&886626941", // Northgate - Sandgate Road and Toombul Road (North)
    "Metropolitan/Nundah_Sandgate_Rd_Sth.jpg&1172413587", // Nundah - Sandgate Road and Tunnel Entrance (South)
    "Metropolitan/mecure.jpg&1498826104", // Riverside Expressway - Mercure Hotel (South)
    "Metropolitan/rochedale_gateway_mwy_sth.jpg&1784769094", // Rochedale - Gateway Motorway and Miles Platting Road (South)
    "Metropolitan/Rochedale_Pac_Mwy_Sth.jpg&2117900381", // Rochedale - Pacific Motorway and Gateway Overpass (South)
    "Metropolitan/Toowong_MtCootha_West.jpg&-1930657511", // Toowong - Mount Cootha and Miskin Street (West)
    "Metropolitan/Upper_MtGravatt_Pac_Mwy_Nth.jpg&-1659404039", // Upper Mount Gravatt - Pacific Motorway and Klumpp Road (North)
    "\\Metropolitan\\MRMETRO-1219.jpg&-1343306243", // Whinstanes - Gateway Motorway - Kingsford Smith Drive (North)
    "Metropolitan/Whinstanes_Gateway_Mwy_Nth.jpg&-1053927539", // Whinstanes - Gateway Motorway and Links Avenue (North)
    "\\Metropolitan\\MRMETRO-1214.jpg&-745015741" // Woolloongabba - Pacific Motorway - Arrow Street (North-West)
];

$(document).ready(function () {
    for (var i = 0, max = images.length; i < max; i++) {
        images[i].src = "http://131940.qld.gov.au/DMR.Controls/WebCams/DisplayImage.ashx?FilePath=" + cameras[i]
    }

    setInterval(function () {
        for (var i = 0, max = images.length; i < max; i++) {
            images[i].src = images[i].src + '?rand=' + Math.random();
        }
    }, 20000);
});