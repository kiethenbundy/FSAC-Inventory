import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, marches, livraisons, bon_livraisons }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    coordonnees: "",
    num: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("fournisseurs.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Creer Nouveau Fournisseur
          </h2>
        </div>
      }
    >
      <Head title="Fournisseurs" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel htmlFor="fournisseurs_marches_id" value="Commande" />

                <SelectInput
                  name="marches_id"
                  id="fournisseurs_marches_id"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("marches_id", e.target.value)}
                >
                  <option value="">Select Commande</option>
                  {marches.data.map((marche) => (
                    <option value={marche.id} key={marche.id}>
                      {marche.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError message={errors.marche_id} className="mt-2" />
              </div>
            
              <div className="mt-4">
                <InputLabel htmlFor="fournisseurs_name" value="Fournisseur Name" />

                <TextInput
                  id="fournisseurs_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseurs_coordonnees"
                  value="Fournisseur Coordonnees"
                />

                <TextAreaInput
                  id="fournisseurs_coordonnees"
                  name="coordonnees"
                  value={data.coordonnees}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("coordonnees", e.target.value)}
                />

                <InputError message={errors.coordonnees} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="fournisseurs_num" value="Fournisseur Numero" />

                <TextInput
                  id="fournisseurs_num"
                  type="text"
                  name="num"
                  value={data.num}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("num", e.target.value)}
                />

                <InputError message={errors.num} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="fournisseurs_email" value="Fournisseur Email" />

                <TextInput
                  id="fournisseurs_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
              </div>



              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseurs_livraison"
                  value="Livraison"
                />

                <SelectInput
                  name="livraison_id"
                  id="fournisseurs_livraison"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("livraison_id", e.target.value)}
                >
                  <option value="">Select Livraison</option>
                  {livraisons.data.map((livraison) => (
                    <option value={livraison.id} key={livraison.id}>
                      {livraison.article.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError
                  message={errors.livraison_id}
                  className="mt-2"
                />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="fournisseurs_bon_livraison"
                  value="BonLivraison"
                />

                <SelectInput
                  name="bon_livraison_id"
                  id="fournisseurs_bon_livraison"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("bon_livraison_id", e.target.value)}
                >
                  <option value="">Select Bon de Livraison</option>
                  {bon_livraisons.data.map((bon_livraison) => (
                    <option value={bon_livraison.id} key={bon_livraison.id}>
                      {bon_livraison.bl}
                    </option>
                  ))}
                </SelectInput>

                <InputError
                  message={errors.bon_livraison_id}
                  className="mt-2"
                />
              </div>


              <div className="mt-4 text-right">
                <Link
                  href={route("fournisseurs.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}