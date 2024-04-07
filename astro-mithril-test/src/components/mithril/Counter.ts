import m, {type ClassComponent, type Vnode} from "mithril";

// Object Component
// export const Counter = {
//     view() {
//         return m("div", m("p", "Mithril Object Component"));
//     }
// };

// Closure Component
// export const Counter = () => {
//     let count = 0;
//     const dummyClass = "class pretend";
//     return {
//         view() {
//             return m("div", [
//                 m("p", "Mithril Closure Component"),
//                 m("button", {onclick: () => count++}, "Increment"),
//                 m("p", `Counter: ${count}`)
//             ]);
//         }
//     };
// };

interface CounterAttrs {
    initCount: number;
    title: string;
}

// Class Component
export class Counter implements ClassComponent<CounterAttrs> {
    count = 0;

    oninit({attrs}: Vnode<CounterAttrs>) {
        this.count = attrs.initCount;
        console.log(attrs);
    }

    view({attrs, children}: Vnode<CounterAttrs>) {
        return m("div", {
            style: {
                background: "rgba(200, 0, 0, 0.2)",
                padding: "20px"
            }
        }, [
            m("h2", attrs.title),
            m("p", "Mithril Class Component"),
            children,
            m("button", {onclick: () => this.count++}, "Increment"),
            m("p", `Counter: ${this.count}`)
        ]);
    };
}