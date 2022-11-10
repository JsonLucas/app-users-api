import { App } from "./utils/app";
import { port } from "./utils/env";

new App().app.listen(port, () => console.log(`server running at port ${port}`));