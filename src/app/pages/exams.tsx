import Layout from '../component/Layout';

const Exams = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Exams</h1>
        <p>Here you can manage exams.</p>
        <div className="mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            Create New Exam
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Exams;
