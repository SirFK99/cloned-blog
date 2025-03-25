import josh from '../assets/img/Josh.jpg'
import jim from '../assets/img/Jim.jpg'
import ffviir from '../assets/img/FFVIIR.jpg'
import joshmd from '../posts/josh.md'
import jimmd from '../posts/jim.md'
import ffviirmd from '../posts/ffviir.md'

const Posts = [
    {
        title: "Why am I doing this?",
        date: "March 20, 2025",
        description: "I want to show you my abilities in learning how to build websites and how I accomplished that.",
        image: josh,
        content: joshmd,
        route: "kennyg"
    },
    {
        title: "Down the Rabbit Hole",
        date: "March 21, 2025",
        description: "As James makes his way through Silent Hill he finds himself digging deeper and deeper into what really happened to his wife. he stares into the empty void not knowing what he'll face but he goes anyways. James would rather face the truth than to continue living the way he has.",
        image: jim,
        content: jimmd,
        route: "silent-hill-2"
    },
    {
        title: "Meow?",
        date: "March 22, 2025",
        description: "I really just wanted to show one of my favourite photos I captured from my playthrough of Final Fantasy VII: Rebirth.",
        image: ffviir,
        content: ffviirmd,
        route: "final-fantasy-vii-rebirth"
    },
]

export default Posts;