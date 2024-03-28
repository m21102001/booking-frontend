import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { toast } from "react-toastify"

const CreateFAQDash = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [answer, setAnswer] = useState('')

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `questions`,
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
          toast.success('تم اضافة سؤال جديد بنجاح')
          setAnswer('')
          setBody('')
          setTitle('')
          // navigate(`/dash/details-playlist/${item?._id}`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('السؤال موجود بالفعل')
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>اضافة سؤال جديد </h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل  عنوان السؤال </div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل عنوان السؤال *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">ادخل وصف السؤال </div>
          <input
            type="text"
            name="body"
            className="form-control  mb-4"
            id="body"
            required
            placeholder="ادخل وصف السؤال *"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="label-form">ادخل  اجابة السؤال </div>
          <input
            type="text"
            name="answer"
            className="form-control  mb-4"
            id="answer"
            required
            placeholder="ادخل اجابة السؤال *"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة مسار جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/cons-fields`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateFAQDash