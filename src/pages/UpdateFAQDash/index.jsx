import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { toast } from "react-toastify"

const UpdateFAQDash = () => {
  const navigate = useNavigate();
  const item = useLocation()?.state?.item
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [body, setBody] = useState(item?.body)
  const [answer, setAnswer] = useState(item?.answer)

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `/questions/${item?._id}`,
          {
            title: title,
            body: body,
            answer: answer
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم تعديل السؤال بنجاح')
          setAnswer('')
          setBody('')
          setTitle('')
          navigate(`/dash/frequently-asked-questions`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('حدث خطأ اثناء التعديل')
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل السؤال </h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">تعديل عنوان السؤال </div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="تعديل عنوان السؤال *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">تعديل وصف السؤال </div>
          <input
            type="text"
            name="body"
            className="form-control  mb-4"
            id="body"
            required
            placeholder="تعديل وصف السؤال *"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="label-form">تعديل  اجابة السؤال </div>
          <textarea
            rows="6"
            type="text"
            name="answer"
            className="form-control  mb-4"
            id="answer"
            required
            placeholder="تعديل اجابة السؤال *"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة مسار جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4" disabled>
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/frequently-asked-questions`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateFAQDash