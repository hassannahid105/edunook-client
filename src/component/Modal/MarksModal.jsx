import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Textarea,
} from "@headlessui/react";
import axios from "axios";

export default function MarksModal({ isOpen, setIsOpen, id }) {
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  console.log(id);
  //   submit marks
  const handleSubmitMarks = async (e) => {
    e.preventDefault();
    console.log(id);
    const form = e.target;
    const marks = form.marks.value;
    const note = form.note.value;
    console.log(marks, note);
    const givingMarks = {
      marks,
      note,
      status: "completed",
    };
    if (id) {
      try {
        const { data } = await axios.patch(
          `http://localhost:5000/assignments/marks/${id}`,
          givingMarks
        );
        console.log(data);
      } catch (err) {
        //   toast.error(err.message);
      }
    }
  };

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
              className="w-full max-w-md rounded-xl bg-red-500 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-3xl font-medium text-white ">
                Given Marks
              </DialogTitle>
              <div>
                <div>pdf link</div>
                <div>note by examinee</div>
              </div>
              <form onSubmit={handleSubmitMarks}>
                <div className="w-full max-w-md px-4 mt-4">
                  <Field>
                    <Label className="text-sm/6 font-medium text-white">
                      Marks
                    </Label>
                    <input
                      name="marks"
                      type="number"
                      className={
                        "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
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
                        "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                      }
                      rows={3}
                    />
                  </Field>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <input
                    type="submit"
                    value="Submit"
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
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
