import { formatearFecha } from "../helpers/formatearFecha";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";

export const Tarea = ({ tarea }) => {
  const admin = useAdmin();
  const { handleModalEditartarea, handleModalEliminarTarea, completarTarea } =
    useProyectos();
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-xl">{formatearFecha(fechaEntrega)}</p>
        <p className="text-gray-600">Prioridad : {prioridad}</p>
        {estado && (
          <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">
            Completada por : {tarea.completado.nombre}
          </p>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {admin && (
          <button
            onClick={() => handleModalEditartarea(tarea)}
            className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
          >
            Editar
          </button>
        )}

        <button
          className={` ${
            estado ? "bg-sky-600" : "bg-gray-600"
          } bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
          onClick={() => completarTarea(_id)}
        >
          {estado ? "Completa" : "Imcompleta"}
        </button>

        {admin && (
          <button
            onClick={() => handleModalEliminarTarea(tarea)}
            className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
          >
            Elimina
          </button>
        )}
      </div>
    </div>
  );
};
