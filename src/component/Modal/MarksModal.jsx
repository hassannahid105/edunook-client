import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Textarea,
} from "@headlessui/react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

export default function MarksModal({
  isOpen,
  setIsOpen,
  id,
  getData,
  examinee,
}) {
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  //   submit marks
  const handleSubmitMarks = async (e) => {
    e.preventDefault();
    const form = e.target;
    const marks = form.marks.value;
    const note = form.note.value;
    const givingMarks = {
      obtainMarks: marks,
      feedback: note,
      status: "completed",
    };
    console.log(givingMarks);
    // if (marks < 0) {
    //   return;
    // }
    // if (note) {
    //   return;
    // }
    if (id) {
      try {
        const { data } = await axios.patch(
          `http://localhost:5000/assignments/marks/${id}`,
          givingMarks
        );
        if (data.modifiedCount > 0) {
          toast.success("Assignment submitted", { duration: 60000 });
          getData();
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  // {acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1}
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full  max-w-md rounded-xl bg-third p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-3xl font-bold text-white  mb-4 "
              >
                Given Marks
              </DialogTitle>
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    // onClick={handlePdf}
                    className=" flex gap-2 items-center px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                  >
                    <span className="text-2xl">
                      <MdPictureAsPdf />
                    </span>

                    <button>Open pdf</button>
                  </div>
                  <div className="flex gap-6 items-center px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    <span className="text-2xl">
                      <FaRegUser />
                    </span>
                    <button>{examinee?.examineeName}</button>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmitMarks}>
                <div className="w-full max-w-md px-4 my-4">
                  <Field>
                    <Label className="text-sm/6 font-medium text-white">
                      Marks
                    </Label>
                    <input
                      name="marks"
                      type="number"
                      className={
                        "mt-2 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 "
                      }
                    />
                  </Field>
                </div>
                <div className="w-full max-w-md px-4">
                  <Field>
                    <Label className="text-sm/6 font-medium text-white">
                      Delivery notes
                    </Label>

                    <Textarea
                      name="note"
                      type="text"
                      className={
                        "mt-2 block w-full resize-none rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black"
                      }
                      rows={3}
                    />
                  </Field>
                </div>
                <div className="mt-4 flex items-center justify-between pl-4">
                  <input
                    type="submit"
                    value="Submit"
                    className="inline-flex  items-center gap-2 px-10 rounded-md bg-yellow-400 py-3  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  />
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
