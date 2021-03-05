import React from 'react'
import { RadialProgress } from 'react-radial-progress-indicator';
import './progress.css'
import {Link} from 'react-router-dom'

function ProgressLowerComponent() {

    return (
        <div className="col-10 col-sm-10 col-md-10 col-lg-10  progress-table"  >

            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th>Img</th>
                         <th>Progress</th>
                        <th>Plan Name</th>
                        <th>Score</th>
                        {/* <th>Details View</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="images">
                                <img src="data:image/png;base64,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"></img>
                            </div>

                        </td>

                        <td>    <div className="radial-progress">
                            <RadialProgress
                                ringFgColour="blue"
                                width={70}
                                height={70}
                                steps={10}
                                step={3}
                            />

                        </div>
                        </td>
                        <td>Increase Height</td>
                        <td>00.520</td>
                        {/* <td><Link to="">Details View</Link></td> */}
                    </tr>
                    <tr>
                        <td>
                            <div className="images">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAABa1BMVEX///9yWUvFx8lNTU/4m0EAssCcnqE3Gw5JSUvg4OCfoaRvcXP4+PilpqlUVFREREZtU0Tw8PHKzM5tYVYAsb9pTT1FRUd4eXt0W02nmZGUhHtpUUT4ljNRUVO7vb+wpJ0oAAA5OTxmSTfT1dYmAAC4raeHc2jc19RbW1zt6+nOxsLR0dGSgHaLi4z/mTTTzMl3aGIAm6e1tbUAdHxoaGoAprN+aFz96NW6fEZfVlHhkUQyMjGooZ/AurguCQBGLiU7GQAbAABUOy47IRVLNS05HRBZRTosIh2BaFaYgnG8rqTl9/ix3eFXenhZamZuzNUulZzL7fBwfnmU2N4GhpBHws1BgYcAZ203YmKh3+U2cnOhz9BcZFt3UD5kaF9bcGtpRC/Qm1OdpoJLraX6rGbEoWiEqIzgnUuwo3T+69z9w5X5qV782Lv6u4D828L7zKXeuJnOhkSSaEmicEj4jhIbIiUVFRO7gEkhKzAzaEgjAAAM4ElEQVR4nO2diXvbthnGdYe0aJG0RUmWLNqUooOWGdeqrEQ+ms1tMm9uE2e5u2zdFq9d2qRd0qXtnz/wkAiQAHWSoDS+z5MneWRSwc8f8OLDQTAWixQpUqRIkSJFihQpUqRIkSJFihQp0v+R1LPT0+4B7VL4IPaTm7u7u+DP5hlHuyyL1enuZzdMfbZ794x2aRaprZs3IN08pV2exekUIQNsKxO31g2XVqW9ffKZk2x3RaokJmg3fke7UIvR6a4b7fcs7VItRBU32d1ai3apFqK7TrBzoSTt0S7VIqR+jnDdO4+XSnFpJTIuEUb7XAJcQLWVaGuchfb5/fMb900wINqlWoy+MNEqpdK9ikFWKgkN2oVajDaNHvseQDo3I3b/fnxFspHGTStqcTNmlT98sU+7TAuSes9Ak4bNDLS3Ju0yLUplIx05H6KtjouAsBmd9l0ITRJpl2lRAq3t3jkUs7i0Et2aLq4vxeHqKNRWIhkxtCXAMROaOyti/kCtGkRWulgdMKBWf0R2cfHHlULj+hU7an+iXZqFqlWrVCpWg+uvVNBiWzUJsFXiTUmqbdEuzAJ1efnlVw9eDQBdn2s1Vmhi/PJhOp9Pp9NHVw+kPu3CLFSPTDBDh3+mXZpF6pENBpR/TLs8i9NlGiLLX60Q2yOYLJ1+cpTOf0m7TIvRY6Q2Aid5AlAvaZdqAbp8ioJZYVuBKvmlURndYXvq6Nfqqqpllmpo6qyMdtgeIdd1Fa3N89kl6scf4sDMsEE1kuNYPmlIpVfUKSVe4dHSV4fpp6OrVDlRZHSwQpFiWacU9+wJHi0PPh96JCfLmYIZNBYEkGqBp1D9+SGe7fAwPWxsotzNGWB8N7bTb+4sR6Xkmq8+xVfJ/BPbR+rZYXVsSHFBii/FSsC+EH9BqJKHhy+HV2mWh8isOd8lNcNfK8v6gPr5FR7t06FFyiYZn0mcWgNwoRR2th1JL+fg+REO7PnXD63L2kZ1ZLKJRHk4mSeEfKFjz5qae/ApBuyVsDlE03o6Wq5z2rfnX8M9+apKw3J+jYIdATDwaeUv1oVcD4RNqcdG1+thC/XMSXM0VbzpAHtgfDpCYxm9ocVEBK0MftCt9kK5KNCwSwqhHT15/sL6tFK3rhRB8tgDf/ehaXNhJxbbUJhCjyYCQSK0bmGjHT1/sTn8tHI2DAlrpvwtGE0FxCCaVZoMBEFBg9Dyr6BKJwlNdEdMY8QmnLJGb8dkwtcLcE0Bh5b+Jg5LkNDEw1oREISthJVWttcpAZClwp4AoT1DlqGAycNxE000oXmakLtVqx+nhkCSWsOjHTnQ4nbe0bJW34RmjJXlntmPt2lC4AW7CGL+XznYJGtvHVuuDbMs8AmnWaOcuvd/Q0WNGh4tv4mimRt+bDCzR7MG3cxaGNFiOzUsWvroryga6MBUG8yw/WFaWSgmZNoYWJ3VsGjpZwibdAZ+CVAlNXZIZsygtWW5Q5sCLzYu4NDSSJUUzuAkJG70BqpiDbo3QkoGzKAs4dAO0SqJxNDIijsAjUny4Z4D2isJbjSXSzrIYlxVUbq9XsjnSFQ9cE40p0uOyMpWJyd2OzExfCmWU3t9yYmWvvImWxqJWy40bJVcPjKgumu+Lv83DBntYs4izj0VeeV0ybBP9BD0yI3mHAEISxkzLNo3YFDmdv1JJYamX3jpbmubQnnLHtJJ00yFi5mCoijZcCTOj11oR3oWPGQThGmerFkvGAkmo4RikOpeP7z6u07TMPJiqT/FjFy3aq0PJJNKCOYWuLQL7ZkZp9Z+rSZMsZU10RuB6YGj3+LcLmKvP6mtyVfm61megciSPP2wuZtafoa8g9UKCBgYqWqLL+uUcu0byT8df5NDaiZZSDrEUEe7dAft4fi7EInrVd4JFoao/fiPf75G6abc6cOttzFgoK1Rnzi53t6+9d2/vn0Nob0cf9dQXEJjsGBJpk17pHB7OwW0fevWd//+Nu80yJE63XWMMsW2wjNYMNCvUZ84uU4NZeKB6L2+7bhmo6rwOBUYEleSVzao4EB6s52CBfCAvkev6SpEArwYvkC/T4t9j6KZ+gG5pI5vS2Qwpd2lRAOLw4ClUrcQA9BcPZaXCnyWelU09BYXtNT2W+gSsT0VmBaO0QxsIgga3NjU3MRgfDUTmnV7fH1EG9ukaAzfXg/RLtfb2PoIwvbGvobrTeKPDN/rhggsFvuJhPYTdNH6eIdkmGyCGgRe70ho76CLuPaYsDFMMSzeYYvQ1EBjg+2fxae/Nli4qqIhkougjU3P7Rl3plUwxCc1eSMRGl8cieQiDvvXJTrFyqYSG4lEInz18UciWup63L1cAlI48g9YJIPU9WbMvSKCRnto5hLJIFOOXAsnbgNmC52P/EAO2tgaGXI0j/o4vkYiaGGzSM4LDUlIcELQwmaRbzyj9sOYuzthtkgP79fD9qP33ShayCwSPw4dob3zvrsOoyVChubVrenyNhIULWQW6dGtGWHzNhIWQQuZRV57By2V8rwbRQuZRY4j23ZOtSJSETTqU8Wobo1Dc6b/iFC0kLn/ODTvGonkxyGzyDdj0TxrpAMtVBbpGoi6smXPGsmhaPTX5CE50bbfukcCHrc70ELk/pz4HycH50pPPKOG5MehsUjuYKspVT78/B7muEYHcMd3PlS8NjA50MJhkQdbccncXFaJf7hzPKyPP0EJs85VicdrXmwoWggsUt0pSfCmuUqlZAbvlp4yXptcFxXrqDAvNgcabYtswQ9a2HiDizvXxvjs9n+P75Qq9hFo6KNQqND8mLJFtvZxYMbuudGGx71z9Cfko48daDQtki1LpA388ZrdUuAHieLGM12k70PR6CXI4pZABIsjZ4nDz1rGjadq8HKgUbPIvT4ZzLmzGGUT9gne50CjtAqlliUSllHnHIXfQdkIBuFEo+H+3FnJI2Rxad/l28jJpRLhUH/VgUbB/Q+aHiETpNIO5p595yNrGDlS/+AtEoARQwa49s+w1W1nBrRgLZLbI4MJQmlrj9TPwmik8+EdqX+gFqnnVKRwCf0dr/dizIIWnEXicyo9WpJUJobL0kxowVhkp1HC1USAVdtvTPAaEwSN8NSJY1QThEUm1ntJpoLDkibC0jUJmjP1998ii0qymssNnFjx/Z2DyWvMRGidgNFYpZDLwWiCUCuVG63pGsJMaH7PIbAnvI6WG9bBfrnBTt++z6QJ0ByjGv8tMndSNcIG+uMm6Lhms62DmdD8tsjMCaOjVcutGbF0tWA00hOHzvzYd4tkFaUK4lad62F3tTQLmu9zCMWTDxeDQY6Z5zvE/gRoztTff/evf/z5OJW64OeqHtDZP5Oj+Z8g9+6njo8/FOZ6wdjWBGjO1D+ABLn78X3q+IKZ6ykCyP0nR/M/QRYLyuBikJzrGSt2AjRXfhxAgqydgFyrOpjnKyAfmQLN/2lW1chICnN9x+gsyGnQAphDKJ4ANH6u32FjAjRn6h/EHELnI8hImLneU2s3NvL5By60IOYQ2iBs81kk1xybQ7rRgphD6IJEMjnfa2pH4xoymis/DmIOgTtRcsn5TiEYZcjToAUxzaqdMHOicf0Z0IKYZlV/UeZEG+VaZDRX6h/MNKv2y8e1+b5hT5oeLZh9CHOf4S7OgBaOfQhjNWxs5BenukY1YdiHMJGGx3hOg0Z7H8KEslZHyWjuUU2Y9jN56WAcmjs/XhY0sTY9Wsg26hJlvZmAOBOBQVsSi7Tmfjxede5GWy6L9EBzp/5LY5EzoIVqNytZZqrl8SZf51rN8likOa6pkQPhTv2XxSLNk8grxYwsnyUOWHczwqAtiUVy/GAwyOWqSf2oGyaZzLWzmQS8ZOzOj5fGIs1VyFz1118vrH8lmWTbbk44tOWwSNVEq5b0NYSqCZdLKvbxNji05bBItmAF7fg4ZZAlC7xy8tEeb2JS/yWxyI6JNnj//s7PPIAC4ntF6EwiTOofuEVyM4k90c9xUBT+t99O+Fy7eNqp60v+9gViYgNVIrjHRrm6vKZpxSLu7LIJ1AORUgrJdlbTMutd1wlo4ItRaWtdHa5e3+j4e1A3J2v6sWWFAq9lZhP4tWjamiHcj6uMLZ7Jrslw4iV3/Gt164x1nhxTxBZsMjiPW+HTY5iivOHKKGV/4MTR0S5Mb3YyL+isTcZU1zGZsk8duGgfH9pe80VFKGbVLoHMjwUO6Ffay/oi6HifQoZItvhuTlSQg4X8EHx0kUwkW/w7UVgYzXdVg0SLBUmWLJCbmg+NTQ4ybPorHklB82EgsDbtUZxzsWkkMl96tkSbeALs4lXI4uukTyMcrttjAqNjksVuIsh91my32K76ZP5O8Xxby4ysUk6w/o9JOZUNTnXzrzn2z0aKFClSpEiRIkWKFClSpEiRIkWKFCmSL/of8RSFMihtLJgAAAAASUVORK5CYII="></img>
                            </div>

                        </td>

                        <td>
                            <div className="radial-progress">
                                <RadialProgress
                                    ringFgColour="blue"
                                    width={70}
                                    height={70}
                                    steps={10}
                                    step={4}
                                 />

                            </div>
                        </td>
                        <td>Increase Fat</td>
                        <td>00.720</td>
                        {/* <td><Link>Details View</Link></td> */}
                    </tr>
                </tbody>
            </table>


        </div>

    )
}

export default ProgressLowerComponent
