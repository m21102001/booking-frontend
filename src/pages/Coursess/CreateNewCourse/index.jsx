import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "@/api/axios"
import { Navbar } from "@/layout";
import { toast } from 'react-toastify';
const CreateNewCourse = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `courses/`,
          {
            title: title,
            price: price,
            image: image,
            description: description,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          toast.success("تم اضافة كورس جديد بنجاح")
          setTitle('')
          setPrice('')
          setImage('')
          setDescription('')
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error("خطأ اثناء انشاء الكورس")
    }
  };
  return (
    <div className="dashboard" style={{ backgroundColor: "var(--darkblue-color)",height:'100vh' }}>
      <Navbar />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>انشاء كورس جديدة</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container text-light d-flex flex-row justify-content-start align-content-center flex-wrap my-4"
        >
          <div className="label-form ">ادخل  عنوان الكورس</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل  عنوان الكورس*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="label-form ">ادخل سعر الكورس</div>
          <input
            type="number"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل  سعر الكورس*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="label-form">اضف صورة </div>
          <input
            type="file"
            name="image"
            className="form-control  mb-4"
            id="image"
            required
            placeholder="اضف صورة *"
            // value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="label-form">اكتب وصفا دقيقا للقائمة*</div>
          <textarea
            type="text"
            name="description"
            className="form-control  mb-4"
            id="description"
            required
            placeholder="اكتب وصفا دقيقا للقائمة*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة كورس جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          {/* <button onClick={() => navigate(`/dash/consultations`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button> */}
        </form>
      </div>
    </div>
  )
}

export default CreateNewCourse