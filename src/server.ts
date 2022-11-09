import { app } from "./utils/app";
import { port } from "./utils/env";

app.listen(port, () => console.log(`server running at port ${port}`));