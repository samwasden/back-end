module.exports = {
    getFortune: (req, res) => {
        const fortunes = ["Soon you will die.",
                           "Everyone you know and love will leave you.",
                           "People will forget about you.",
                 "You won't age well.",
                 "That special someone in your life is using you."
        ];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
        
      },

      getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },

      generateBackground: (req, res) => {
        console.log("arrived")
        let body = {
          deg: Math.floor(Math.random() * 100)
        }
        res.status(200).send(body)
      }
};