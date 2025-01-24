app.Method(Path, handeler)

const res = function(req, res) { 
    res.send ("response string!")
};

app.get("/", (req, res)=>{ 
res.sendFile(path.join(_dirname, "filename.json")); 
}); 

app.use(express.json()); 
apps.use(express.static("public")); 

app.get("URL", (req, res) => { 
    res.json({ key: data}); 
});

app.get("URL", (req, res)=>{ 
    res.json({key:data}); 
});

app.post("NEWURL", (req, res)=>{ 
    res.json({ key:data}); 
});

app.put("ANOTHERURL", (req, res)=> { 
    res.json({ key:data}); 
}); 

app.delete("FINALURL", (req, res)=>{ 
    res.json({ key:data}); 
}); 