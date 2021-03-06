import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                {/* <section id="main" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>
                        <section>
                            <h4>Form</h4>
                            <form netlify-honeypot="bot-field" data-netlify="true" netlify method="post" action="thank-you">
                                <div className="row gtr-uniform gtr-50">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="name" id="demo-name"  placeholder="Name" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="email" id="demo-email" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <select name="demo-category" id="demo-category">
                                            <option value="">- Category -</option>
                                            <option value="1">Manufacturing</option>
                                            <option value="1">Shipping</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                        <label htmlFor="demo-priority-low">Low</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                                        <label htmlFor="demo-priority-normal">Normal</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                        <label htmlFor="demo-priority-high">High</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                        <label htmlFor="demo-copy">Email me a copy</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-human" name="demo-human" checked/>
                                        <label htmlFor="demo-human">Not a robot</label>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" />
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><button type="submit">Send</button></li>
                                            <li><input type="reset" value="Reset" /></li>
                                        </ul>
                                    </div>
                                    <input type="hidden" name="form-name" value="contact" />
                                </div>
                            </form>
                        </section>
                    </div>
                </section> */}
            </Layout>
        );
    }
}
