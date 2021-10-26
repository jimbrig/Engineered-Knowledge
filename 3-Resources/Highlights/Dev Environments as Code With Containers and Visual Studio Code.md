- **URL:** https://medium.com/p/690897a2be59
- **Author:** Ari
- **Tags:** #articles
- **Date:** [[2021-10-25]]
---

Developing code in a single environment is like cooking using a dirty pan and oven. It will work the first few times, but eventually, ingredients (dependencies) will carry over from the previous recipe into the next, leading to unexpected and unpredictable results. %% highlight_id: 242119449 %%


Open a new or existing project in Visual Studio Code. In the root of the project create an empty folder and call it .devcontainer. The name is important as it’s used by Visual Studio Code to know where to find your configuration files. %% highlight_id: 242119450 %%


Within .devcontainer create a JSON file named devcontainer.json, again the name is important and is detected by Visual Studio Code. The JSON file is used to define the settings, extensions, and behavior of Visual Studio Code once it launches from within the container. Copy and paste the following JSON into devcontainer.json and save. %% highlight_id: 242119451 %%

