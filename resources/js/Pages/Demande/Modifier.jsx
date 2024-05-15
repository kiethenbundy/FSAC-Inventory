import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";

export default function Create({ auth, demande }) {
  
  const { data, setData, put, errors, reset } = useForm({
    name: demande.name,
    description: demande.description,
    status: demande.status,
    due_date: demande.due_date,
  });

  
  const onSubmit = (e) => {
    e.preventDefault();
    put(route("demande.update", demande.id)); 
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
           {`Édition de la Demande "${demande.name}"`}
          </h2>
        </div>
      }
    >
      <Head title={`Édition de la Demande "${demande.name}"`} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form onSubmit={onSubmit} className="p-6">
              
              <div>
                <InputLabel htmlFor="demande_name" value="Nom de la Demande" />
                <TextInput
                  id="demande_name"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  className="mt-1 block w-full"
                  isFocused={true}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>

              
              <div className="mt-4">
                <InputLabel htmlFor="demande_description" value="Description" />
                <TextAreaInput
                  id="demande_description"
                  name="description"
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                  className="mt-1 block w-full"
                />
                <InputError message={errors.description} className="mt-2" />
              </div>

           
              <div className="mt-4">
                <InputLabel htmlFor="demande_status" value="Statut" />
                <SelectInput
                  id="demande_status"
                  name="status"
                  value={data.status}
                  onChange={(e) => setData("status", e.target.value)}
                  className="mt-1 block w-full"
                >
                  <option value="">Sélectionner le Statut</option>
                  <option value="pending">En Attente</option>
                  <option value="in_progress">En Cours</option>
                  <option value="completed">Terminé</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>

             
              <div className="mt-4">
                <InputLabel htmlFor="demande_due_date" value="Date Limite" />
                <TextInput
                  id="demande_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  onChange={(e) => setData("due_date", e.target.value)}
                  className="mt-1 block w-full"
                />
                <InputError message={errors.due_date} className="mt-2" />
              </div>

             
              <div className="mt-4 text-right">
                <Link
                  href={route("demande.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow hover:bg-gray-200 mr-2"
                >
                  Annuler
                </Link>
                <button type="submit" className="bg-emerald-500 py-1 px-3 text-white rounded shadow hover:bg-emerald-600">
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}