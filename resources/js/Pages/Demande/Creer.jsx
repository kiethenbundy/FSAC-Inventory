import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";

export default function Create({ auth, articles }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        description: "",
        status: "pending",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("demande.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Créer une Demande de Fourniture
                    </h2>
                </div>
            }
        >
            <Head title="Créer une Demande" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-6">
                            <div>
                                <InputLabel
                                    htmlFor="demande_name"
                                    value="Nom de la Demande"
                                />
                                <TextInput
                                    id="demande_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="demande_description"
                                    value="Description"
                                />
                                <TextAreaInput
                                    id="demande_description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="demande_status"
                                    value="Statut"
                                />
                                <SelectInput
                                    id="demande_status"
                                    name="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="mt-1 block w/full"
                                >
                                    <option value="pending">En Attente</option>
                                    <option value="in_progress">
                                        En Cours
                                    </option>
                                    <option value="completed">Terminé</option>
                                </SelectInput>
                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="marche_articles_id"
                                    value="Article"
                                />

                                <SelectInput
                                    name="articles_id"
                                    id="marche_articles_id"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("articles_id", e.target.value)
                                    }
                                >
                                    <option value="">Select Article</option>
                                    {articles.data.map((article) => (
                                        <option
                                            value={article.id}
                                            key={article.id}
                                        >
                                            {article.name}
                                        </option>
                                    ))}
                                </SelectInput>

                                <InputError
                                    message={errors.article_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 text-right">
                                <Link
                                    href={route("demande.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow hover:bg-gray-200"
                                >
                                    Annuler
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow hover:bg-emerald-600"
                                >
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
