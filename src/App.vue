<template>
  <div class="container">
    <ul class="set">
      <li class="white c" @click="playSound('key1')"></li>
      <li class="black cs" @click="playSound('key9')"></li>
      <li class="white a" @click="playSound('key2')"></li>
      <li class="black cs" @click="playSound('key10')"></li>
      <li class="white f" @click="playSound('key3')"></li>
      <li class="white e" @click="playSound('key4')"></li>
      <li class="black gs" @click="playSound('key11')"></li>
      <li class="white c" @click="playSound('key5')"></li>
      <li class="black gs" @click="playSound('key12')"></li>
      <li class="white a" @click="playSound('key6')"></li>
      <li class="black gs" @click="playSound('key13')"></li>
      <li class="white g" @click="playSound('key7')"></li>
      <li class="white e" @click="playSound('key8')"></li>
      <!-- Agrega el resto de los botones de tecla aquí -->
    </ul>
  </div>
</template>

<script>
import sound1 from "./ruta/sonido1.wav";
import sound2 from "./ruta/sonido2.wav";
import sound3 from "./ruta/sonido3.wav";
import sound4 from "./ruta/sonido4.wav";
import sound5 from "./ruta/sonido5.wav";
import sound6 from "./ruta/sonido6.wav";
import sound7 from "./ruta/sonido7.wav";
import sound8 from "./ruta/sonido8.wav";
import sound9 from "./ruta/negra1.wav";
import sound10 from "./ruta/negra2.wav";
import sound11 from "./ruta/negra3.wav";
import sound12 from "./ruta/negra4.wav";
import sound13 from "./ruta/negra5.wav";

// Importa el resto de los archivos de sonido aquí

export default {
  data() {
    return {
      sounds: {
        key1: new Audio(sound1),
        key2: new Audio(sound2),
        key3: new Audio(sound3),
        key4: new Audio(sound4),
        key5: new Audio(sound5),
        key6: new Audio(sound6),
        key7: new Audio(sound7),
        key8: new Audio(sound8),
        key9: new Audio(sound9),
        key10: new Audio(sound10),
        key11: new Audio(sound11),
        key12: new Audio(sound12),
        key13: new Audio(sound13),
        // Agrega el resto de los archivos de sonido aquí
      },
    };
  },
  methods: {
    playSound(keyId) {
      const sound = this.sounds[keyId];
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #222;
}

ul {
  height: 20em;
  width: 38em;
  margin: 5em auto;
  padding: 3em 0 0 4em;
  position: relative;
  border: 1px solid #160801;
  border-radius: 1em;

  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
    0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  float: left;
}

ul .white {
  height: 16em;
  width: 4em;
  z-index: 1;
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-radius: 0 0 5px 5px;
  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
    0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #eee 0%, #fff 100%);
}

ul .white:active {
  border-top: 1px solid #777;
  border-left: 1px solid #999;
  border-bottom: 1px solid #999;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
    -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

.black {
  height: 8em;
  width: 2em;
  margin: 0 0 0 -1em;
  z-index: 2;
  border: 1px solid #000;
  border-radius: 0 0 3px 3px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #222 0%, #555 100%);
}

.black:active {
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, #444 0%, #222 100%);
}

.a,
.g,
.f,
.d,
.c {
  margin: 0 0 0 -1em;
}

ul li:first-child {
  border-radius: 5px 0 5px 5px;
}

ul li:last-child {
  border-radius: 0 5px 5px 5px;
}
/* Media queries for responsive design */

@media (max-width: 768px) {
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: #222;
  }

  ul {
    height: 20em;
    width: 33em;
    margin: 5em auto;
    padding: 3em 0 0 4em;
    position: relative;
    border: 1px solid #160801;
    border-radius: 1em;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
      0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    float: left;
  }

  ul .white {
    height: 14em;
    width: 3.5em;
    z-index: 1;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    border-radius: 0 0 5px 5px;
    box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
      0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #eee 0%, #fff 100%);
  }

  ul .white:active {
    border-top: 1px solid #777;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
      -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
  }

  .black {
    height: 7em;
    width: 2em;
    margin: 0 0 0 -1em;
    z-index: 2;
    border: 1px solid #000;
    border-radius: 0 0 3px 3px;
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
      0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
    background: linear-gradient(45deg, #222 0%, #555 100%);
  }

  .black:active {
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
      0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to right, #444 0%, #222 100%);
  }

  .a,
  .g,
  .f,
  .d,
  .c {
    margin: 0 0 0 -1em;
  }

  ul li:first-child {
    border-radius: 5px 0 5px 5px;
  }

  ul li:last-child {
    border-radius: 0 5px 5px 5px;
  }
}

@media (max-width: 500px) {
  .container {
    width: 100vw;
    padding: 0;
    box-sizing: border-box;
  }
  .set {
    transform: rotate(90deg);
    padding: auto;
  }

  ul {
    height: 50vh;
    width: 170vw;
    margin: 10em 1em 0 -8em;
    padding: auto;
    position: relative;
    border: 1px solid #160801;
    border-radius: 1em;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
      0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  li {
    width: 100%;
    float: left;
    display: inline-block;
  }

  ul .white {
    height: 90%;
    width: 12%;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    border-radius: 0 0 3px 3px;
    box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
      0 0 3px rgba(0, 0, 0, 0.2);
  }

  ul .white:active {
    border-top: 1px solid #777;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
      -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
  }

  .black {
    height: 40%;
    width: 4%;
    margin: 0 0 0 -0.5em;
  }

  .black:active {
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
      0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to right, #444 0%, #222 100%);
  }
}

@media (max-width: 299px) {
  .container {
    width: 100vw;
    padding: 0;
    box-sizing: border-box;
  }
  .set {
    transform: rotate(90deg);
    padding: auto;
  }

  ul {
    height: 40vh;
    width: 190vw;
    margin: 12em 1em 0 -8em;
    padding: auto;
    position: relative;
    border: 1px solid #160801;
    border-radius: 1em;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
      0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  li {
    width: 100%;
    float: left;
    display: inline-block;
  }

  ul .white {
    height: 90%;
    width: 12%;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    border-radius: 0 0 3px 3px;
    box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
      0 0 3px rgba(0, 0, 0, 0.2);
  }

  ul .white:active {
    border-top: 1px solid #777;
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
      -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
  }

  .black {
    height: 40%;
    width: 4%;
    margin: 0 0 0 -0.5em;
  }

  .black:active {
    box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
      0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to right, #444 0%, #222 100%);
  }
}
</style>
