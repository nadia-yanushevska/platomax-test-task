<h1>PlayToMax Test Task</h1>
        <h3>by Nadiia Yanushevska</h3>
        <h2>Contents</h2>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#terminal">Terminal Run</a></li>
            <li><a href="#interactive">User Interactive Mode</a></li>
            <li><a href="#tech">Tech Stack</a></li>
        </ul>
        <h2 id="about">About</h2>
        <p>
            This game generates board with cells, each containing one of the
            symbols: ♠, ♥, ♣, ♦. When user clicks on a cell, it deletes the cell
            as well as any of its neighbors with the same value.
        </p>
        <p>
            There are two modes to play the game: using terminal with default
            and random values and user interactive, where you can choose the
            values.
        </p>
        <h2 id="terminal">Terminal Run</h2>
        
<p><code>&#9888; Requires Node.js LTS version</code></p>
<p>To run demo mode, copy repository, open terminal in the root folder and enter the following command:</p>
            <p><code>node main.js</code></p>
        <p>
            This mode uses default board size of 8x8 cells, and runs 3 round of
            the game. Each round generates random values for row and column
            to imitate user cell selection. Then the selected cell is clicked
            and the cell(s) is/are deleted. At the end of the round, the updated
            table is displayed.
        </p>
        <h3>Preview:</h3>
        <img
            src="./img/terminal-preview.png"
            alt="Game Preview in Terminal"
        />

<h2 id="interactive">User Interactive Mode</h2>
        <p>To run user interactive mode, navigate to live page.</p>
        <p><code>&#128712; This is light version of the game and does not provide visualizations yet. Use <strong>Dev Tools</strong> to see logs.</code></p>
        <p>
            Once the page loads you will see prompts, which will ask to input
            number of rows and number of columns for the table. After that, you
            will be asked if you want to continue playing. If you choose to
            continue, you will be asked to select row and column of the cell
            coordinates to click. Otherwise, the game is finished.
        </p>

<h2 id="tech">Tech Stack</h2>
        <ul>
            <li>Javascript</li>
            <li>OOP</li>
        </ul>
