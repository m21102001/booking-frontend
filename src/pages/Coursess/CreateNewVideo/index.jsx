import { useState } from "react"
import { useLocation } from 'react-router-dom';
import axios from "@/api/axios"
import { toast } from "react-toastify"
const CreateNewVideo = () => {
  const item = useLocation()?.state?.item
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  console.log('iteeeeeeeeeem',item);
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `videos/`,
          {
            title: title,
            course: item?._id,
            description: description,
            url: url,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم اضافة فيديو بنجاح')
          setTitle('')
          setDescription('')
          setUrl('')
          // navigate(`/dash/details-playlist/${item?._id}`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('لم يتم الاضافة تأكد من اضافة البيانات بشكل صحيح')
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل فيديو داخل الكورس</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">تعديل  عنوان الفيديو</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="تعديل عنوان الفيديو*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">تعديل عنوان الفيديو(Url)</div>
          <input
            type="text"
            name="url"
            className="form-control  mb-4"
            id="url"
            required
            placeholder="تعديل لينك الفيديو*"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="label-form">تعديل الوصف *</div>
          <textarea
            type="text"
            rows={5}
            name="description"
            className="form-control  mb-4"
            id="description"
            required
            placeholder="تعديل الوصف *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل الفيديو
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          {/* <button onClick={() => navigate(`/dash/details-playlist/${item?._id}`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
          cancel
        </button> */}
        </form>
      </div>
    </div>
  )
}

export default CreateNewVideo