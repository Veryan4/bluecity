# Blue City Technology Test


### Docker

```
docker pull veryan4/bluecity
docker run -p 80:80 veryan4/bluecity
```

You can then visit the application at Visit your http://localhost:80/


### Angular 8

Requirements: Node.js, Angular

```
git clone https://github.com/Veryan4/bluecity.git
cd chorno
npm install
ng serve
```

You can then visit the application at http://localhost:4200/


### Requirements

1. The page should be responsive and should have multiple sections. - <em>Done.</em>
2. One of the sections should contain a collapsible menu. - <em>The Side Nav is collapsible for the sake of the exercise. I would have left it unfurled otherwise</em>
3. In one of the sections, there should be a chart visualizing some data. - <em>See the Chart section. Given more context, I might've picked a different style of chart, but the stacked bar chart seemed like the best approach given the data.</em>
4. In another section, you should visualize some data using WebSocket It’s a one way websocket and you client should only listen to it. There is no need to send any data to it. It updates the data every 30 seconds. - <em>See the Socket section</em>
5. In the last section, we need a tree-like chart similar to the following commit-tree. There is no need to implement this graph completely. Just show us that you are able to implement it in a reasonable amount of time. - <em>See the Tree section. Given more time, I would've scrolled the git tree vertically as you add commits. This would've kept the vertical size constant and the tree centered in your screen.</em>


### Notes

I used pre-existing open-source libraries, as it would take too much effort for one person to maintain and support these types of charts/trees across different browsers and screen dimensions. They are very flexible, however they might not always suit your business needs to the letter. That being said, I would start by modifying one of these libraries to your needs, as it would provide the best value/effort in the short to mid term.
