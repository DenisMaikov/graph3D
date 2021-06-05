Template.prototype.graph3DTemplate = () => `
    <div class="content">
        <canvas width="500" height="500" id="canvas3D"></canvas>
        <div class="boxes">
            <input type="checkbox" id="points" name="points">
            <label>Точки</label>
            <input type="checkbox" id="edges" name="edges">
            <label>Рёбра</label>
            <input type="checkbox" id="polygones" name="polygones" checked="checked">
            <label>Полигоны</label>
            <br>
            <select id="figure">
                <option value="Сфера">Сфера</option>
                <option value="Куб">Куб</option>
                <option value="Тор">Тор</option>
                <option value="Пирамида">Конус</option>
                <option value="Овал">Эллипсоид</option>
                <option value="ЭЦ">Эллиптический Цилиндр</option>
                <option value="ПЦ">Параболический Цилиндр</option>
                <option value="ОГ">Однополосный гиперболоид</option>
                <option value="ЭП">Эллиптический параболоид</option>
                <option value="ДГ">Двухполосный гиперболоид</option>
                <option value="ГЦ">Гиперболический цилиндр</option>
                <option value="Седло">Гиперболический параболоид</option>
            </select>
            <br>
            <input type="range" id="lumen" min="0" max="100000" step="1000" value="50000">
            <label>Свет</label>
            <br>
        </div>
    </div>`;