# Asuka-Start (V.1)
A minimal startpage created with Pywal in mind.
<a href='https://imvampi.github.io/Asuka-Start/'>Demo.</a>
<img src='images/thumbnail.png' width="100%" height="auto">
Customization:
---
- **Links**
Open index.html and configure them manually 
```html
<div class="terminal-bar"> 
                    <div class="tab">Anime</div>
                    <div class="tab">Social</div>
                    <div class="tab">Develop.</div>
                    <div class="tab">Fun</div>
                </div>
                <div class="categories">
                    <div id="category-1" class="category">
                        <a href="https://anilist.co/" class="link">Anlist</a>
                        <a href="https://animepahe.com/" class="link">Animepahe</a>
                        <a href="http://konachan.net/" class="link">Konachan</a>
                        <a href="https://yande.re/post" class="link">Yande.re</a>
                        <a href="https://mangadex.org/" class="link">Mangadex</a>
                    </div>
```
- **Color Schemes**
If you want to edit the color scheme manually you can do so by changing these variables in style.css
```css
:root {
    --terminal-color: #1b0b0db8;
    --terminal-bar: #A25B57;
    --tab-1: #f1cbc0;
    --tab-2: #F98F6E;
    --tab-3: #8A5B67;
    --tab-4: #D3B263;
}
```

- **Pywal customization**
In order to use pywal with Asuka you must go to the cloned or downloaded repo and create a symlink to the ~/.config/wal/colors.css by typing this command into your terminal
```bash
     ln -s /home/YOURUSERNAME/.cache/wal/colors.css colors.css
```    
this creates a real time link to your constantly changing color schemes.
once you do this you need to enable pywal by editing the background.js file like so
```javascript
let pywal = true;
```
**Note: The desktop wallpaper is not taken from this, you must manually move the image to the /images folder and name it background.jpg**
