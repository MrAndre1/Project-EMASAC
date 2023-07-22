import { pool } from "../db.js";

export const getCliente = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM cliente");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM cliente WHERE id_cliente = ?",
      [req.params.id]
    );
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Cliente Not Found",
      });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const createCliente = async (req, res) => {
  const { nombre, apellidos, correo, celular, id_users, dni } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO cliente (nombre, apellidos, correo, celular, id_users, dni) VALUES(?,?,?,?,?,?)",
      [nombre, apellidos, correo, celular, id_users, dni]
    );
    res.json({
      message: "New Cliente Created",
      body: [
        {
          id_clientes: rows.insertId,
          nombre,
          apellidos,
          correo,
          celular,
          id_users,
          dni,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, correo, celular, id_users, dni } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE cliente SET nombre = IFNULL(?, nombre), apellidos = IFNULL(?, apellidos), correo = IFNULL(?, correo), celular = IFNULL(?, celular), id_users = IFNULL(?, id_users), dni = IFNULL(?, dni) WHERE id_cliente = ?",
      [nombre, apellidos, correo, celular, id_users, dni, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Cliente Not Found",
      });
    const [rows] = await pool.query(
      "SELECT * FROM cliente WHERE id_cliente = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM cliente WHERE id_cliente = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Cliente Not Found",
      });
    res.json({
      message: "Cliente Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
