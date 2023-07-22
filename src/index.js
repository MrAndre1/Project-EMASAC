import express from "express";
import cors from "cors"
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";
import destinoRoutes from "./routes/destino.routes.js"
import origenRoutes from "./routes/origen.routes.js"
import reservaRoute from "./routes/reserva.routes.js"
import clientRouter from "./routes/cliente.routes.js"
import contactRoutes from "./routes/contacto.routes.js"
import cargaRoutes from "./routes/carga.routes.js"

import {PORT} from './config.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use("/api", usersRoutes);
app.use("/api", destinoRoutes);
app.use("/api", origenRoutes);
app.use("/api", reservaRoute);
app.use("/api", clientRouter);
app.use("/api", cargaRoutes);
app.use("/api", contactRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

app.listen(PORT);
console.log('Server running on port', PORT);
