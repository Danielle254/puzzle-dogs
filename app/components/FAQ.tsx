import CustomAccordion from "@/components/CustomAccordion";

export default function FAQ() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Frequently Asked Questions</h2>
      <CustomAccordion
        data={FAQdata}
        customClasses="[&[data-state='open']]:bg-primary/10"
      />
    </section>
  );
}

const FAQdata = [
  {
    question: "How much do your puppies cost?",
    answer:
      "The dogs themselves are free! You’re paying for my years of pedigree and genetic research, CVT training, puppy developmental knowledge, and the costs (so many costs!) to produce a litter ethically. This oftentimes involves “washing” (not using) multiple dogs before finding a dog whose temperament and health is in line with my breeding goals. The general price for a Puzzle Dog will be in the low-mid four figures. I practice equity, not equality, in puppy pricing, so will place some puppies at a lower cost (eg in junior handler placements) and charge more for others to cover this. I’m happy to set up payment plans.",
  },
  {
    question: "Do you guarantee your dogs’ health and temperament?",
    answer:
      "The short answer is no, because genetics are complicated! Breeding dogs isn’t like producing widgets on an assembly line. We can do everything “right,” and you could still end up with a dog who has a health problem (physical or behavioral). Any breeder who claims to have never produced a dog with “issues” is either lying through their teeth, not following up with their puppy buyers, or very new to the game. That said, I do provide a five-year genetic health warranty, and I will always be you and your dog’s biggest advocate and support system if you run into any problems.",
  },
  {
    question: "What do you look for in your puppy homes? ",
    answer:
      "Thanks for asking! I look first for people who are obsessed with their dogs. I don’t place my dogs in homes that “need” a dog who will do a specific sport, or who need a specific size of dog (eg a height dog). Instead, I look for placements with people whose dogs are their family members first. I want my dogs to be included in your everyday life! It’s also important to me to produce dogs who are easy to train and live with. As such, I don’t place my dogs in homes that routinely use aversive training methods such as electronic/remote collars, pinches, prongs, chokes, leash corrections, or other aversive methods.",
  },
  {
    question: "What the heck is a partner home? ",
    answer:
      "The number of dogs whom I can personally, ethically keep in my own home is low. I’m disabled, and I live in town. In order to ensure that I’m providing exceptional lives to my dog family, I can’t keep a large pack. Partner homes permit me to keep good dogs in our breeding program, while ensuring that every single dog I produce has a family who’s absolutely obsessed with them. Partner homes also provide me with valuable information on the dogs I produce: how they do in a variety of environments, sports, and families! Partner homes are NOT like traditional “guardian” homes. Partners own their dogs outright, but Puzzle Dogs retains breeding rights (with equal and valued input from the partner home about breeding suitability and options).",
  },
  {
    question: "What does your puppy purchasing process look like?",
    answer:
      "I place based on a number of factors: suitability for each individual puppy, location (I prefer homes that are closer to me, especially if I don’t already know you!), need (I prefer to place puppies with people who may encounter barriers to getting a dog from a breeder), and more. Once a litter is born, I’ll collect a refundable deposit from a handful of people whom I believe to be the best fits for that litter. Puppy placements are done at or slightly after eight weeks of age, based on structural evaluations completed by our boarded sports medicine and rehabilitation vet, behavioral evaluations, and observations from raising the litter.",
  },
  {
    question: "I want to learn more about breeding. Do you offer mentorships?",
    answer:
      "Yes! I’m delighted to help others learn. If you’re local to me, I offer limited mentorships as a “Puppy Nanny” with each litter. You’ll receive lots of hands-on experience and the chance to ask all of your questions about breeding! Not local? I offer very limited, paid consultations at the rate of $200/hour.",
  },
];
