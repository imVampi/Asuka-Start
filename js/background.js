let pywal = false;

if (pywal == true) {
    let relative_path = "../../../../Pictures/anime/wallpaper/"; //Change to the relative path where you store your wallpapers
    let wallpaper = getComputedStyle(document.documentElement).getPropertyValue('--wallpaper').toString(); 
    wallpaper = wallpaper.split('url("/home/anthony/Pictures/anime/wallpaper/').pop(); //Remember to change this to what fits your path in your colors.css
    wallpaper = wallpaper.substring(0, wallpaper.length - 2);
    relative_path += wallpaper;
    //Set Wallpaper
    document.body.style.background = `url("${relative_path}")`;
    document.body.style.backgroundSize = 'cover';
    
    let background = getComputedStyle(document.documentElement).getPropertyValue('--background'); // #999999
    let color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1'); // #999999
    let foreground = getComputedStyle(document.documentElement).getPropertyValue('--foreground'); // #999999
    let color4 = getComputedStyle(document.documentElement).getPropertyValue('--color4'); // #999999
    let color10 = getComputedStyle(document.documentElement).getPropertyValue('--color10'); // #999999
    let color13 = getComputedStyle(document.documentElement).getPropertyValue('--color13'); // #999999
    // document.body.style.background = color1;

    let root = document.documentElement;
    root.style.setProperty("--terminal-color", `${background}b8`);
    root.style.setProperty("--terminal-bar", color1);
    root.style.setProperty("--tab-1", foreground);
    root.style.setProperty("--tab-2", color4);
    root.style.setProperty("--tab-3", color10);
    root.style.setProperty("--tab-4", color13);
}

let terminal_color = getComputedStyle(document.documentElement).getPropertyValue('--terminal-color'); // #999999
let terminal_bar = getComputedStyle(document.documentElement).getPropertyValue('--terminal-bar'); // #999999
let tab_1 = getComputedStyle(document.documentElement).getPropertyValue('--tab-1'); // #999999
let tab_2 = getComputedStyle(document.documentElement).getPropertyValue('--tab-2'); // #999999
let tab_3 = getComputedStyle(document.documentElement).getPropertyValue('--tab-3'); // #999999
let tab_4 = getComputedStyle(document.documentElement).getPropertyValue('--tab-4'); // #999999

document.getElementById('terminal-color').innerText = terminal_color;
document.getElementById('terminal-bar').innerText = terminal_bar;
document.getElementById('tab-1').innerText = tab_1;
document.getElementById('tab-2').innerText = tab_2;
document.getElementById('tab-3').innerText = tab_3;
document.getElementById('tab-4').innerText = tab_4;
