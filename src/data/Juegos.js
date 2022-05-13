import img1 from '../imagenes/counterstrike.png';
import img2 from '../imagenes/destiny2.png';
import img3 from '../imagenes/portalReloaded.png';
import img4 from '../imagenes/yugiohMasterDuel.png';
import img5 from '../imagenes/amnesiarebirth.png';
import img6 from '../imagenes/riverbond.png';
import img7 from '../imagenes/jda.png';
import img8 from '../imagenes/paradigm.png';
import img9 from '../imagenes/terraformingMars.png';
import img10 from '../imagenes/FridayNightFunkin.png';
import img11 from '../imagenes/doki-doki-literature-club.jpg';
import img12 from '../imagenes/deltarune.png';
import img13 from '../imagenes/bloodbornepsx.png';


export const JUEGOS = [
    { id: 1, category: 'steam', name: 'Counter-Strike: Global Offensive', fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img1, cantidad: 0,  descripcion: 'Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).', link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/', tienda: 'steam' },
    { id: 2, category: 'steam', name: 'Destiny 2', fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img2, cantidad: 0, descripcion: 'Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.', link: 'https://store.steampowered.com/app/1085660/Destiny_2/', tienda: 'steam' },
    { id: 3, category: 'steam', name: 'Portal Reloaded', fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img3, cantidad: 0, descripcion: 'Portal Reloaded is a free, community made modification for Portal 2. The mod builds on the concepts of the main game by allowing you to place a third portal, which enables traveling between two different timelines. Thinking in four dimensions is vital to solving 25 brand new mind-bending puzzles.', link: 'https://store.steampowered.com/app/1255980/Portal_Reloaded/', tienda: 'steam' },
    { id: 4, category: 'steam', name: 'Yu Gi Oh: Master Duel', fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img4, cantidad: 0, descripcion: '¡La edición definitiva del juego de cartas competitivo que lleva más de 20 años evolucionando! Bátete en Duelo al mayor nivel contra Duelistas de todo el mundo.', link: 'https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/', tienda: 'steam' },
    { id: 5, category: 'epic', name: 'Amnesia Rebirth', fechaDesde: '21/04/2022', fechaHasta: '28/04/2022', precio: 3.99, moneda: 'usd', imagen: img5, cantidad: 0, descripcion: 'Amnesia: Rebirth, un nuevo descenso en la oscuridad, de los creadores de la serie emblemática Amnesia. Una travesía tormentosa a través del abatimiento y la desesperación, que explora los límites de la resiliencia humana.', link: 'https://store.epicgames.com/es-MX/p/amnesia-rebirth', tienda: 'epic' },
    { id: 6, category: 'epic', name: 'Riverbond', fechaDesde: '21/04/2022', fechaHasta: '28/04/2022', precio: 4.99, moneda: 'usd', imagen: img6, cantidad: 0, descripcion: 'Riverbond es un fantástico y frenético juego cooperativo de aventuras para entre 1 y 4 jugadores, ambientado en un impresionante mundo de vóxeles.', link: 'https://store.epicgames.com/es-MX/p/riverbond-782aa4', tienda: 'epic' },
    { id: 7, category: 'epic', name: 'Just Die Already', fechaDesde: '28/04/2022', fechaHasta: '05/05/2022', precio: 2.99, moneda: 'usd', imagen: img7, cantidad: 0, descripcion: 'Just Die Already es un juego sandbox caótico de ancianos creado por los diseñadores de Goat Simulator. Eres viejo y estás enojado, y te acaban de echar de tu residencia de ancianos. ¿Cómo sobrevivirás en un mundo que ya quiere que te mueras?', link: 'https://store.epicgames.com/es-MX/p/just-die-already', tienda: 'epic' },
    { id: 8, category: 'epic', name: 'Paradigm', fechaDesde: '28/04/2022', fechaHasta: '05/05/2022', precio: 10.00, moneda: 'usd', imagen: img8, cantidad: 0, descripcion: 'Paradigm is a surreal adventure game set in the strange and post apocalyptic Eastern European country of Krusz. Play as the handsome mutant, Paradigm, whose past comes back to haunt him in the form of a genetically engineered sloth that vomits candy.', link: 'https://store.epicgames.com/es-MX/p/paradigm-875c5c', tienda: 'epic' },
    { id: 9, category: 'epic', name: 'Terraforming Mars', fechaDesde: '05/05/2022', fechaHasta: '12/05/2022', precio: 10.00, moneda: 'usd', imagen: img9, cantidad: 0, descripcion: 'In Terraforming Mars, you control a corporation with a certain profile. Play project cards, build up production, place your cities and green areas on the map, and race for milestones and awards!', link: 'https://store.epicgames.com/es-MX/p/terraforming-mars-18c3ad', tienda: 'epic' },
    { id: 10, category: 'itchio', name: "Friday Night Funkin'", fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img10, cantidad: 0, descripcion: 'Friday Night Funkin\' es un videojuego de ritmo lanzado el 1 de noviembre de 2020, desarrollado por el programador canadiense Cameron Taylortanbien conocido como: Ninjamuffin99 Fue lanzado en Newgrounds y en Itch.io', link: 'https://ninja-muffin24.itch.io/funkin', tienda: 'itchio' },
    { id: 11, category: 'itchio', name: "Doki Doki Literature Club!", fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img11, cantidad: 0, descripcion: 'Welcome to the Literature Club! It\'s always been a dream of mine to make something special out of the things I love. Now that you\'re a club member, you can help me make that dream come true in this cute game! Every day is full of chit-chat and fun activities with all of my adorable and unique club members: Sayori, the youthful bundle of sunshine who values happiness the most; Natsuki, the deceivingly cute girl who packs an assertive punch; Yuri, the timid and mysterious one who finds comfort in the world of books; ...And, of course, Monika, the leader of the club! That\'s me! I\'m super excited for you to make friends with everyone and help the Literature Club become a more intimate place for all my members. But I can tell already that you\'re a sweetheart—will you promise to spend the most time with me? ♥', link: 'https://teamsalvato.itch.io/ddlc', tienda: 'itchio' },
    { id: 12, category: 'itchio', name: "Deltarune", fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img12, cantidad: 0, descripcion: 'The next adventure in the UNDERTALE series has appeared! Fight (or spare) alongside new characters in UNDERTALE\'s parallel story, DELTARUNE...!', link: 'https://tobyfox.itch.io/deltarune', tienda: 'itchio' },
    { id: 13, category: 'itchio', name: "Bloodborne PSX", fechaDesde: '', fechaHasta: '', precio: 0.00, moneda: 'usd', imagen: img13, cantidad: 0, descripcion: 'Travel to the gothic Victorian city of Yharnam, whose blood-soaked roads are filled with unspeakable terrors hidden behind every corner. Wield over 10 unique hunter weapons using the Strategic Action Combat system to vanquish your foes. Dodge incoming attacks with your hunter\'s quick step ability, parry enemies with your quicksilver firearm, and transform your trick weapon to tailor your loadout for any encounter in this new, next generation 3D experience that blends RPG and Action in a way you\'ve been seen before. Only one question remains: Can you survive the night?', link: 'https://b0tster.itch.io/bbpsx', tienda: 'itchio' },
]