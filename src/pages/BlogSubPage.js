import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './BlogSubPage.css';
import BookAppointmentModal from './BookAppointmentModal';
import AskQuestionModal from './AskQuestionModal';

const BlogSubPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  return (
    <div className="blog-subpage">
      <Navbar />
      <header className="sub-header">
        <div className="sub-header-content">
          <h1>What Does Arthritis Feel Like? Symptoms and Treatment</h1>
          <p className="author">By Dr. Jillian Stabile, MD</p>
        </div>
        <div className="sub-header-image">
          <img src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Doctor" />
          <button className="play-btn">▶</button>
        </div>
      </header>
      <main className="sub-main">
        <div className="sub-main-left">
          <section className="insights">
            <h2>Key Insights for David</h2>
            <ul>
              <li>Arthritis is a chronic condition that causes inflammation in the joints, often leading to pain, stiffness, swelling, and fatigue.</li>
              <li>Arthritis pain can range from mild discomfort to severe, activity-limiting symptoms. It often affects the hands, knees, back, and feet. In the fingers, it may cause frequent pain, pea-sized nodules, swelling, and reduced mobility.</li>
              <li>Early signs include joint stiffness in the morning, fatigue, tenderness, and limited range of motion.</li>
              <li>Risk factors: Over half of adults over 75 have arthritis. A family history of arthritis increases his risk. Previous injuries or repetitive hand use can also trigger joint degeneration.</li>
            </ul>
          </section>
          <article className="sub-article">
            <span className="tag">Geriatrics</span>
            <p>Arthritis, like many other chronic illnesses, is often misunderstood. Arthritis is a broad term for over 100 medical conditions that cause inflammation in the joints and surrounding tissue. The two most common types of arthritis are osteoarthritis (OA) and rheumatoid arthritis (RA). Approximately 54.4 million adults have been diagnosed with a type of arthritis in the United States — and those numbers are on the rise. According to the Centers for Disease Control and Prevention (CDC), 78.4 million Americans will be affected by arthritis by 2040. Arthritis is more than just joint pain; it's a chronic condition that impacts countless aspects of daily life. Read on to learn more about what arthritis feels like. Learn about early symptoms to look out for and possible treatments to manage the chronic condition and improve your quality of life.</p>
            <blockquote>Approximately 54.4 million adults have been diagnosed with a type of arthritis in the United States — and those numbers are on the rise. According to the Centers for Disease Control and Prevention (CDC), 78.4 million Americans will be affected by arthritis by 2040.</blockquote>
            <p>Arthritis can feel like an ever-present companion, causing joint pain, stiffness, swelling, redness and fatigue — all of which can vary depending on the type of arthritis a person has. Most commonly, people with arthritis may feel pain in and near the affected joints.<br/><br/>
            For some, the pain is mild and manageable. For others, pain is severe enough to impact their ability to work, move, or sleep. Additionally, over time, the people with arthritis have difficulties pushing or pulling objects, and may need help with chores or lifting heavier blocks.</p>
            <h3>Symptoms of the most common forms of arthritis:</h3>
            <ul>
              <li><strong>Osteoarthritis (OA):</strong> OA is the most common type of arthritis. It is frequently called wear-and-tear arthritis. It is a condition where one or more joints and their surrounding tissue become inflamed and painful. Chronic joint damage from OA causes severe joint stiffness, joint swelling, and reduced mobility.</li>
              <li><strong>Rheumatoid arthritis (RA):</strong> RA is an autoimmune disease that can impact small joints, surrounding tissue, and certain organs. RA happens when a person's immune system targets healthy tissue by mistake. People with inflammatory arthritis can cause severe pain, swelling, stiffness, fatigue, and tissue growth (nodules), loss of bone density, lung tissue inflammation and dry mouth.</li>
            </ul>
            <h3>Signs of arthritis:</h3>
            <ul>
              <li>The hands, fingers and wrists: Frequent and severe pain in one or more of the small joints in the fingers. Pea-sized nodules, or bumps, on the joints closest to the fingertips. Joint swelling or inflammation of the finger joints, knuckles or base of the thumb. Stiffness or gradual loss of mobility and function. Finger or thumb deformities</li>
              <li>The back, spine and neck: Neck or lower back pain. Limited neck and head motion. Limited flexibility and stiffness of the lower back. Headaches. Nerve pain.</li>
              <li>The knee: Gradual knee pain that gets worse after movement or activities. Knee stiffness. Knee swelling. Pain after periods of sitting, laying down or resting. Redness and warmth around the affected knee (in knee OA). Reduced mobility and range of motion. Appearance of nodules, or bumps, under the skin of the affected knee</li>
            </ul>
            <div className="sub-cta">
              <div>
                <strong>Worried about your symptoms?</strong>
                <p>Booking an appointment with a medical professional is the first step toward feeling better.</p>
              </div>
              <button onClick={() => setModalOpen(true)}>Book Appointment</button>
            </div>
            <h3>Available treatment options</h3>
            <p>Available treatment options can differ based on the type of arthritis, its severity and a person's overall health and lifestyle. Several treatment options can provide <a href="#">arthritis pain relief</a> and help manage your symptoms.</p>
            <ul>
              <li>Use of over-the-counter (OTC) non-steroidal anti-inflammatory drugs (NSAIDs), like ibuprofen, can help with short-term pain and inflammation relief.</li>
              <li>In severe or advanced cases, joint replacement surgery can be an option.</li>
              <li>Lifestyle changes, like weight reduction, regular stretching, quitting smoking and eating an anti-inflammatory diet, may help reduce the severity of symptoms.</li>
              <li>People with RA may be prescribed disease-modifying antirheumatic drugs (DMARDs) to slow the progression of the disease, with development of certain types of arthritis, like rheumatoid arthritis, also treated with advanced therapies.</li>
              <li>Certain OTC pain relief creams and gels that contain capsaicin (Zapsasin) or salicylates (Aspirin, Aspercreme) are not present for short term relief.</li>
              <li>Applying an ice pack or a moist heating pad for 20 minutes every other day can help reduce swelling and complement your ongoing treatment.</li>
            </ul>
            <p>If you think you may be showing early onset signs and symptoms of arthritis, contact your healthcare provider. You may be connected to an arthritis specialist or rheumatologist who can help you get a diagnosis. Always check with your healthcare provider before taking any medications or supplements or if you have any preexisting conditions, such as high blood pressure.</p>
            <p>If you're experiencing joint pain, Sesame can connect you with top-rated, licensed healthcare providers who can help. Book an affordable online doctor visit appointment to discuss your symptoms, receive a thorough evaluation and explore possible diagnoses and treatment options tailored to your needs.</p>
            <p>Providers on Sesame can provide medical advice, pain management strategies and ongoing support to improve your quality of life, all from the comfort of your home. Don't let uncertainty hold you back — take the first step toward relief with Sesame today.</p>
            <div className="sub-subscribe">
              <div>
                <strong>Take care of yourself now, not later.</strong>
                <p>Subscribe for same-day medical help.</p>
              </div>
              <button>Subscribe !</button>
            </div>
            <div className="sub-explore">
              <h4>Explore More</h4>
              <ul>
                <li><a href="#">7 People With Rheumatoid Arthritis Explain How They're Thriving</a></li>
                <li><a href="#">5 Common Arthritis Myths, Debunked by Science</a></li>
                <li><a href="#">Manage Osteoarthritis With These 8 Self-Care Strategies</a></li>
                <li><a href="#">The Good Knee Guide: Protect Your Joints</a></li>
              </ul>
            </div>
          </article>
        </div>
        <aside className="sub-sidebar">
          <div className="sidebar-topics">
            <span>Topics:</span>
            <div className="topics-list">
              <span>Weight loss</span>
              <span>Pediatrics</span>
              <span>Mental Health</span>
              <span>Dermatology</span>
              <span>Women's Health</span>
            </div>
          </div>
          <div className="sidebar-author">
            <img src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Jillian Stabile, MD" />
            <strong>Dr. Jillian Stabile, MD</strong>
          </div>
          <div className="sidebar-author-info">
            <div className="sidebar-actions">
              <button onClick={() => setModalOpen(true)}>Book Appointment</button>
              <button onClick={() => setAskModalOpen(true)}>Ask Questions</button>
            </div>
          </div>
        </aside>
      </main>
      <BookAppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <AskQuestionModal open={askModalOpen} onClose={() => setAskModalOpen(false)} />
    </div>
  );
};

export default BlogSubPage; 