# 🎈 Emoji Shooter Game

A simple arcade game in JavaScript using jQuery, where the player's goal is to click on appearing emoji/balloons before they disappear from the screen.

## 🎮 Features

- **Dynamic emoji spawning** - random generation of emojis in different places on the screen
- **Progressive difficulty** - the game becomes increasingly difficult over time (emojis move faster)
- **Animated background** - decorative clouds moving in the background
- **Scoring system** - tracking hits and missed emojis
- **Responsive design** - adapts to window size

## 🚀 Installation and Launch

1. Clone the repository:
```bash
git clone https://github.com/olsborn/code-samples.git
cd code-samples/04-js-simple-shooter-game
```

2. Open the `index.html` file in a web browser:
   - Double-click on the `index.html` file, or
   - Run a local server (e.g., Live Server in VS Code)

**Note:** The game does not require installation of additional dependencies - jQuery is included locally.

## 🎬 Demo

![Demo](demo.gif)

## 📁 Project Structure

```
04-js-simple-shooter-game/
├── index.html          # Main HTML file with game logic
├── css/
│   └── style.css      # CSS styles and animations
├── js/
│   └── jquery-3.6.0.min.js  # jQuery library
└── images/
    ├── em1.png        # Emoji graphics (1-6)
    ├── em2.png
    ├── em3.png
    ├── em4.png
    ├── em5.png
    ├── em6.png
    └── cloud.png      # Cloud graphic
```

## 🛠️ Technologies

- **HTML5**
- **CSS3** - animations, gradients, responsive layout
- **JavaScript** - game logic
- **jQuery 3.6.0** - DOM manipulation and event handling

## 📝 Technical Details

### Main Game Mechanics:

- **Game Loop**: Main loop runs with 10ms interval (`setInterval`)
- **Spawning**: Emojis are generated randomly with increasing frequency
- **Physics**: Each emoji has an individual speed coefficient

### Configuration Variables in Code:

- Max number of emojis on screen: 18
- Delay between spawns: min. 750ms
- Difficulty increase: +0.015 per new emoji
- Emoji size: random 30-120px

## 🎨 Customization

You can easily customize the game:
- Change emoji images in the `images/` folder
- Adjust colors in `css/style.css`
- Modify difficulty by changing parameters in `EMOJIA_APP` (index.html)
- Add new background elements or visual effects

## 📄 License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

## 👤 Author

**olsborn**
- GitHub: [@olsborn](https://github.com/olsborn)
- Repository: [code-samples](https://github.com/olsborn/code-samples)

---

**Przykład gry z portfolio demonstracyjnych projektów JavaScript**
