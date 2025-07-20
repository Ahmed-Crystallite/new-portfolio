"use client"
import { Star } from "lucide-react";
import { useState } from "react";

interface RatingProps {
  rating: number;
  title: string;
  description: string;
}

const RatingCard = ({ rating, title, description }: RatingProps) => {
  return (
    <div className="bg-[#0e1538] p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default function Ratings() {
   const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    // Here you can handle the submission (e.g., send to API)
    console.log({ rating, comment });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0e1538] p-6 rounded-lg text-center text-white">
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p>Your feedback has been submitted successfully.</p>
      </div>
    );
  }
  return (
    <section>
        <div className="relative z-10 overflow-hidden py-[80px]">
            <div className="container">
                <div className="text-center text-white relative z-10">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">Feedback & Ratings</h2>
              <div className="relative z-10 mt-4">
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:left-[38%] lg:left-[36%] md:left-[32%] sm:left-[28%] left-[18%] rounded"></span>
                <span className="block font-sans sm:text-[30px] text-[22px] leading-tigth">
                  Honest Feedback
                </span>
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px]  xl:right-[38%] lg:right-[36%] md:right-[32%] sm:right-[28%] right-[18%] rounded"></span>
              </div>
            </div>
            {/* Rating Cards Grid */}
          <form onSubmit={handleSubmit}>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-8 h-8 cursor-pointer transition-colors ${
                index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400 hover:text-yellow-200"
              }`}
              onClick={() => setRating(index + 1)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-3 rounded-lg bg-[#1a2547] text-white mb-4 min-h-[100px]"
          placeholder="Share your thoughts or suggestions for improvement..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
            </div>
        </div>
    </section>
  )
}
