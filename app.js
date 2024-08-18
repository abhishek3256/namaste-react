
    const heading=React.createElement("h1",{id:"heading" , xyz:"abc"},"Hello world from React");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    console.log(heading);
    const parent=React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag"),
        ]),
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag"),
        ]),
    ]);
    console.log(parent);
    root.render(parent);    